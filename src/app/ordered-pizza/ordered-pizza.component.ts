import { Component, Input } from "@angular/core";
import { IPizza } from "../core/models";

@Component({
  selector: "app-ordered-pizza",
  templateUrl: "./ordered-pizza.component.html",
  styleUrls: ["./ordered-pizza.component.scss"],
})
export class OrderedPizzaComponent {
  @Input() pizza: IPizza | null = null;

  constructor() {}
}
