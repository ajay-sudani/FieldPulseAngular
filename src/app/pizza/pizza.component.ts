import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { PizzaService } from "../core/services/pizza.service";
import { IPizza, IPizzeria } from "../core/models";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.scss"],
})
export class PizzaComponent implements OnChanges {
  @Input() public selectedPizzeria: IPizzeria | null = null;
  @Output() setSelectedPizza = new EventEmitter<IPizza[]>();
  @Output() setSelectedTabIndexEvent = new EventEmitter<number>();

  public pizzas: IPizza[] = [];
  public totalPizzas = 0;
  public subTotal = 0;

  constructor(private pizzaService: PizzaService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedPizzeria?.id !== -1) {
      this.getPizzerias();
    }
    if (
      changes["selectedPizzeria"]?.currentValue?.id !==
      changes["selectedPizzeria"]?.previousValue?.id
    ) {
      this.totalPizzas = 0;
      this.subTotal = 0;
    }
  }

  // To get default pizza list and apply filter based on selected pizzeria
  private getPizzerias() {
    this.pizzaService.getPizzaJSON().subscribe((data: IPizza[]) => {
      this.pizzas = data.filter((pizza) =>
        pizza.available_in_pizzerias.includes(
          this.selectedPizzeria?.id as number
        )
      );
    });
  }

  // Increase selected pizza quantity
  updatePizzaQuantity(pizza: IPizza, index: number) {
    this.pizzas[index] = pizza;
    this.totalPizzas = this.pizzas.reduce((total: number, pizza: IPizza) => {
      return total + (pizza.quantity || 0);
    }, 0);
    this.subTotal = this.pizzaService.getPizzaSubtotal(this.pizzas);
    this.setSelectedPizza.emit(
      this.pizzas.filter((pizza) => (pizza.quantity as number) > 0)
    );
  }
}
