import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PizzaService } from "../core/services/pizza.service";
import { IPizza, IPizzeria } from "../core/models";

@Component({
  selector: "app-pizzerias",
  templateUrl: "./pizzerias.component.html",
  styleUrls: ["./pizzerias.component.scss"],
})
export class PizzeriaComponent implements OnInit {
  @Output() setSelectedTabIndexEvent = new EventEmitter<number>();
  @Output() selectPizzeriaEvent = new EventEmitter<IPizzeria>();
  public pizzerias: IPizzeria[] = [];
  public selectedPizzeriaId: number = -1;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.getPizzerias();
  }

  // Get default pizzerias list
  private getPizzerias() {
    this.pizzaService.getPizzeriasJSON().subscribe((data: IPizzeria[]) => {
      this.pizzerias = data;
    });
  }

  // Set selected pizzeria id and notify to parent component about selection
  onSelectPizzeria(id: number) {
    this.selectedPizzeriaId = id;
    this.selectPizzeriaEvent.emit(
      this.pizzerias.find((pizza) => pizza.id === id)
    );
  }
}
