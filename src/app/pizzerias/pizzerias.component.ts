import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";
import { Tabs } from "../core/utils";
import { PizzaService } from "../core/services/pizza.service";
import { IPizzeria } from "../core/models";

@Component({
  selector: "app-pizzerias",
  templateUrl: "./pizzerias.component.html",
  styleUrls: ["./pizzerias.component.scss"],
})
export class PizzeriaComponent implements OnInit, OnDestroy {
  public pizzerias: IPizzeria[] = [];
  public selectedPizzeria: IPizzeria | undefined = undefined;

  private pizzeriasJSONSubscriber: Subscription = new Subscription();

  @Output() onSelectPizzeria = new EventEmitter<IPizzeria>();
  @Output() setSelectedTabIndex = new EventEmitter<number>();

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.setPizzerias();
  }

  ngOnDestroy(): void {
    this.pizzeriasJSONSubscriber.unsubscribe();
  }

  // Get default pizzerias JSON and set it to pizzerias
  private setPizzerias() {
    this.pizzeriasJSONSubscriber = this.pizzaService
      .getPizzeriasJSON()
      .subscribe((data: IPizzeria[]) => {
        this.pizzerias = data;
      });
  }

  selectPizza() {
    this.setSelectedTabIndex.emit(Tabs.CHOOSE_PIZZA);
  }

  // Set selected pizzeria id and notify to parent component about selection
  onPizzeriaChange(id: number) {
    this.selectedPizzeria = this.pizzerias.find((pizza) => pizza.id === id);
    this.onSelectPizzeria.emit(this.selectedPizzeria);
  }
}
