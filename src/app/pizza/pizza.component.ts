import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";
import { PizzaService } from "../core/services/pizza.service";
import { IPizza, IPizzeria } from "../core/models";
import { Tabs } from "../core/utils";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.scss"],
})
export class PizzaComponent implements OnInit, OnChanges, OnDestroy {
  public availablePizzas: IPizza[] = [];
  public totalPizzas = 0;
  public subTotal = 0;
  public tabs = Tabs;

  private pizzaJSONSubscriber: Subscription = new Subscription();
  private pizzas: IPizza[] = [];

  @Input() public selectedPizzeria: IPizzeria | null = null;

  @Output() setSelectedPizza = new EventEmitter<IPizza[]>();
  @Output() setSelectedTabIndex = new EventEmitter<number>();

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.getPizzas();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedPizzeria?.id !== -1) {
      this.setAvailablePizzas();
    }
    if (
      changes["selectedPizzeria"]?.currentValue?.id !==
      changes["selectedPizzeria"]?.previousValue?.id
    ) {
      this.totalPizzas = 0;
      this.subTotal = 0;
    }
  }

  ngOnDestroy(): void {
    this.pizzaJSONSubscriber.unsubscribe();
  }

  // Get all available pizzas
  private getPizzas() {
    this.pizzaJSONSubscriber = this.pizzaService
      .getPizzaJSON()
      .subscribe((data: IPizza[]) => {
        this.pizzas = data;
      });
  }

  // To get default pizza list and apply filter based on selected pizzeria
  private setAvailablePizzas() {
    this.availablePizzas = this.pizzas.filter((pizza) =>
      pizza.available_in_pizzerias.includes(this.selectedPizzeria?.id as number)
    );
  }

  // Increase selected pizza quantity
  updatePizzaQuantity(pizza: IPizza, index: number) {
    this.pizzas[index] = pizza;
    this.subTotal = this.pizzaService.getPizzaSubtotal(this.pizzas);
    this.updateTotalPizzas();
    this.setSelectedPizza.emit(
      this.pizzas.filter((pizza) => (pizza.quantity as number) > 0)
    );
  }

  updateTotalPizzas() {
    this.totalPizzas = this.pizzas.reduce((total: number, pizza: IPizza) => {
      return total + (pizza.quantity || 0);
    }, 0);
  }
}
