import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IPizzeria } from "../core/models";

@Component({
  selector: "app-pizzeria-card",
  templateUrl: "./pizzeria-card.component.html",
  styleUrls: ["./pizzeria-card.component.scss"],
})
export class PizzeriaCardComponent {
  @Input() selectedPizzeria: IPizzeria | null = null;

  constructor() {}
}
