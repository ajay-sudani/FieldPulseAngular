import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";
import { PizzaService } from "../core/services/pizza.service";
import { IPizza, IPizzeria } from "../core/models";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.scss"],
})
export class PizzaComponent implements OnInit, OnDestroy {
  public pizzas: IPizza[] = [];
  public totalPizzas = 0;
  public subTotal = 0;

  private pizzaJSONSubscriber: Subscription = new Subscription();

  @Input() public selectedPizzeria: IPizzeria | null = null;

  @Output() setSelectedPizza = new EventEmitter<IPizza[]>();
  @Output() onBack = new EventEmitter<IPizza[]>();

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.setPizzas();
  }

  ngOnDestroy(): void {
    this.pizzaJSONSubscriber.unsubscribe();
  }

  updatePizzaQuantity(pizza: IPizza, index: number) {
    this.pizzas[index] = pizza;
    this.subTotal = this.pizzaService.getPizzaSubtotal(this.pizzas);
    this.updateTotalPizzas();
  }

  updateTotalPizzas() {
    this.totalPizzas = this.pizzas.reduce((total: number, pizza: IPizza) => {
      return total + (pizza.quantity || 0);
    }, 0);
  }

  orderCalculation() {
    this.setSelectedPizza.emit(
      this.pizzas.filter((pizza) => (pizza.quantity as number) > 0)
    );
  }

  private setPizzas() {
    this.pizzaJSONSubscriber = this.pizzaService
      .getPizzaJSON()
      .subscribe((data: IPizza[]) => {
        this.pizzas = data.filter((pizza) =>
          pizza.available_in_pizzerias.includes(
            this.selectedPizzeria?.id as number
          )
        );
      });
  }
}
