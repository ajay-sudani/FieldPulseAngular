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
import { getPizzaSubtotal } from "../core/utils";

type TogglePizzaType = "add" | "remove";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.scss"],
})
export class PizzaComponent implements OnChanges {
  @Input() public selectedPizzeria: IPizzeria | null = null;
  @Output() selectedPizzaListEvent = new EventEmitter<IPizza[]>();
  @Output() setSelectedTabIndexEvent = new EventEmitter<number>();

  public pizzaList: IPizza[] = [];
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
      this.pizzaList = data.filter((pizza) =>
        pizza.available_in_pizzerias.includes(
          this.selectedPizzeria?.id as number
        )
      );
    });
  }

  // Set selected pizza's total quantity
  togglePizza(pizza: IPizza, type: TogglePizzaType) {
    if (type === "add") {
      pizza.quantity = (pizza.quantity || 0) + 1;
      this.totalPizzas++;
    } else if (type === "remove" && pizza.quantity) {
      pizza.quantity = pizza.quantity - 1;
      this.totalPizzas--;
    }
    this.subTotal = getPizzaSubtotal(this.pizzaList);
    this.selectedPizzaListEvent.emit(
      this.pizzaList.filter((pizza) => (pizza.quantity as number) > 0)
    );
  }
}
