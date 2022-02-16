import { Component } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { IOrderResponse, IPizza, IPizzeria } from "../core/models";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  public selectedTabIndex: number = 0;
  public selectedPizzeria: IPizzeria | null = null;
  public selectedPizzas: IPizza[] = [];
  public orderResponse: IOrderResponse | null = null;

  constructor() {}

  onSelectPizzeria(pizzeria: IPizzeria): void {
    this.selectedPizzeria = pizzeria;
    this.selectedPizzas = [];
    this.orderResponse = null;
  }

  selectedTabChange(event: MatTabChangeEvent): void {
    this.selectedTabIndex = event.index;
  }

  setSelectedPizza(pizzas: IPizza[]): void {
    this.selectedPizzas = pizzas;
  }

  setOrderedPizzasResponse(orderResponse: IOrderResponse | null): void {
    console.log(orderResponse);
    this.orderResponse = orderResponse;
  }
}
