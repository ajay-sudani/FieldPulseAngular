import { Component } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { IOrderResponse, IPizza, IPizzeria } from "../core/models";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
  public selectedTabIndex: number = 0;
  public selectedPizzeria: IPizzeria | null = null;
  public selectedPizzas: IPizza[] = [];
  public orderResponse: IOrderResponse | null = null;

  constructor() {}

  // Set selected pisseria based on selected dropdown option
  onSelectPizzeria(pizzeria: IPizzeria): void {
    this.selectedPizzeria = pizzeria;
    this.selectedPizzas = [];
    this.orderResponse = null;
  }

  // Set active tab index when click on tab direclty
  onSelectedTabChange(event: MatTabChangeEvent): void {
    this.selectedTabIndex = event.index;
  }

  // Set active tab index when click on other button
  setSelectedTabIndex(tabIndex: number): void {
    this.selectedTabIndex = tabIndex;
  }

  // set selected pizza
  setSelectedPizza(pizzas: IPizza[]): void {
    this.selectedPizzas = pizzas;
  }

  // Set ordered pizzas output object
  setOrderResponse(orderResponse: IOrderResponse | null): void {
    console.log(orderResponse);
    this.orderResponse = orderResponse;
  }
}
