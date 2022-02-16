import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";
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

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.setPizzerias();
  }

  ngOnDestroy(): void {
    this.pizzeriasJSONSubscriber.unsubscribe();
  }

  selectPizza() {
    this.onSelectPizzeria.emit(this.selectedPizzeria);
  }

  onPizzeriaChange(id: number) {
    this.selectedPizzeria = this.pizzerias.find((pizza) => pizza.id === id);
  }

  private setPizzerias() {
    this.pizzeriasJSONSubscriber = this.pizzaService
      .getPizzeriasJSON()
      .subscribe((data: IPizzeria[]) => {
        this.pizzerias = data;
      });
  }
}
