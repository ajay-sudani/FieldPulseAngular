import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { IPizzeria } from "../core/models";

@Component({
  selector: "app-pizzeria-card",
  templateUrl: "./pizzeria-card.component.html",
  styleUrls: ["./pizzeria-card.component.scss"],
})
export class PizzeriaCardComponent implements OnInit {
  @Input() selectedPizzeria: IPizzeria | null = null;
  @Output() selectPizza = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
