import { Component } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { Steps } from "../core/utils";
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
  public steps = Steps;
  public activeStep: Steps = Steps.PIZZERIA;

  constructor() {}

  onSelectPizzeria(pizzeria: IPizzeria): void {
    this.selectedPizzeria = pizzeria;
    this.selectedPizzas = [];
    this.orderResponse = null;
  }

  setSelectedPizza(pizzas: IPizza[]): void {
    this.selectedPizzas = pizzas;
  }

  setOrderedPizzasResponse(orderResponse: IOrderResponse | null): void {
    console.log(orderResponse);
    this.orderResponse = orderResponse;
    this.activeStep = Steps.ORDER_CONFIRMATION;
  }

  goToNextStep() {
    switch (this.activeStep) {
      case Steps.PIZZERIA:
        this.activeStep = Steps.PIZZA;
        break;
      case Steps.PIZZA:
        this.activeStep = Steps.ORDER_CALCULATION;
        break;
      case Steps.ORDER_CALCULATION:
        this.activeStep = Steps.ORDER_CONFIRMATION;
        break;
    }
  }

  goBack() {
    switch (this.activeStep) {
      case Steps.PIZZA:
        this.activeStep = Steps.PIZZERIA;
        break;
      case Steps.ORDER_CALCULATION:
        this.activeStep = Steps.PIZZA;
        break;
      case Steps.ORDER_CONFIRMATION:
        this.activeStep = Steps.ORDER_CALCULATION;
        break;
    }
  }

  getNextBtnState(): boolean {
    switch (this.activeStep) {
      case Steps.PIZZERIA:
        return !this.selectedPizzeria;
      case Steps.PIZZA:
        return this.selectedPizzas.length === 0;
      default:
        return false;
    }
  }
}
