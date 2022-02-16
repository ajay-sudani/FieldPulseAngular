import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  Input,
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
  @Input() selectedPizzeria: IPizzeria | null = null;

  @Output() onSelectPizzeria = new EventEmitter<IPizzeria>();

  public pizzerias: IPizzeria[] = [];

  private pizzeriasJSONSubscriber: Subscription = new Subscription();

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.setPizzerias();
  }

  ngOnDestroy(): void {
    this.pizzeriasJSONSubscriber.unsubscribe();
  }

  onPizzeriaChange(id: number) {
    this.selectedPizzeria = this.pizzerias.find(
      (pizza) => pizza.id === id
    ) as IPizzeria;
    this.onSelectPizzeria.emit(this.selectedPizzeria);
  }

  private setPizzerias() {
    this.pizzeriasJSONSubscriber = this.pizzaService
      .getPizzeriasJSON()
      .subscribe((data: IPizzeria[]) => {
        this.pizzerias = data;
      });
  }
}
