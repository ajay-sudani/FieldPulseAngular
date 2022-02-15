import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
  EventEmitter,
} from "@angular/core";
import {
  IPizza,
  IPizzeria,
  IOrderResponse,
  IOrderedPizza,
} from "../core/models";
import { Country_Tax_Rate, Tabs } from "../core/utils";
import { PizzaService } from "../core/services/pizza.service";

type TaxCountryType = "au_tax_rate" | "nz_tax_rate";

@Component({
  selector: "app-pizza-order-calculation",
  templateUrl: "./pizza-order-calculation.component.html",
  styleUrls: ["./pizza-order-calculation.component.scss"],
})
export class PizzaOrderCalculationComponent implements OnInit, OnChanges {
  public totalTax: number = 0;
  public subTotal: number = 0;
  public orderResponse: IOrderResponse | null = null;

  private usTaxRate: number = 0;

  @Input() public pizzas: IPizza[] = [];
  @Input() public selectedPizzeria: IPizzeria | null = null;

  @Output() setSelectedTabIndex = new EventEmitter<number>();
  @Output() setOrderedPizzasResponse = new EventEmitter<IOrderResponse | null>();

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzaService.getUsTaxRate().subscribe((rate) => {
      this.usTaxRate = rate.us_tax_rate;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes["selectedPizzeria"]?.currentValue?.id !==
      changes["selectedPizzeria"]?.previousValue?.id
    ) {
      this.totalTax = 0;
      this.subTotal = 0;
    }
  }

  /**
   *  Get ordered pizzas
   * @returns ordered pizza list
   */
  getOrderedPizza(): IOrderedPizza[] {
    const list: IOrderedPizza[] = [];
    this.pizzas.forEach((pizza) => {
      const { id: pizza_id, price, is_taxed } = pizza;
      const quantity = pizza.quantity as number;
      let taxRate: number = 0;
      if (is_taxed) {
        const country: string =
          Country_Tax_Rate[this.selectedPizzeria?.country as ""];
        const isCountryUS = country === Country_Tax_Rate.US;
        const defaultTaxRate = pizza[country as TaxCountryType];
        taxRate = Number(isCountryUS ? this.usTaxRate : defaultTaxRate);
      }
      const subtotal = quantity * price;
      const tax = Number(((subtotal * taxRate) / 100).toFixed(2));
      list.push({
        pizza_id,
        quantity,
        subtotal,
        tax,
        total: subtotal + tax,
      });
    });
    return list;
  }

  confirmOrder() {
    if (this.selectedPizzeria) {
      // calculate tax rate based on selected pizzeria and pizza type
      const orderedPizza = this.getOrderedPizza();
      this.totalTax = this.pizzaService.getOrderedPizzasTotalTax(orderedPizza);
      this.subTotal = this.pizzaService.getPizzaSubtotal(this.pizzas);
      this.orderResponse = {
        result: {
          pizzeria_id: this.selectedPizzeria.id,
          pizza_items: orderedPizza,
          subtotal: this.subTotal,
          tax: this.totalTax,
          total: Number((this.subTotal + this.totalTax).toFixed(2)),
        },
      };
      this.setOrderedPizzasResponse.emit(this.orderResponse);
      this.setSelectedTabIndex.emit(Tabs.ORDER_CONFIRMATION);
    }
  }
}
