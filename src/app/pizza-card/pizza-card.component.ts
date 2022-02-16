import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IPizza } from "../core/models";

@Component({
  selector: "app-pizza-card",
  templateUrl: "./pizza-card.component.html",
  styleUrls: ["./pizza-card.component.scss"],
})
export class PizzaCardComponent {
  @Input() pizza: IPizza | null = null;
  @Output() updatePizzaQuantity = new EventEmitter<IPizza>();

  constructor() {}

  onAddPizzaQuantity(pizza: IPizza) {
    pizza.quantity = (pizza.quantity || 0) + 1;
    this.updatePizzaQuantity.emit(pizza);
  }

  onRemovePizzaQuantity(pizza: IPizza) {
    if (pizza.quantity) {
      pizza.quantity = pizza.quantity - 1;
      this.updatePizzaQuantity.emit(pizza);
    }
  }
}
