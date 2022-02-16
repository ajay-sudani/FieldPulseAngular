import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";
import { PizzaService } from "../core/services/pizza.service";
import { IPizza, IPizzeria } from "../core/models";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.scss"],
})
export class PizzaComponent implements OnInit, OnDestroy {
  @Input() public selectedPizzeria: IPizzeria | null = null;
  @Input() public selectedPizzas: IPizza[] = [];

  @Output() setSelectedPizza = new EventEmitter<IPizza[]>();
  @Output() onBack = new EventEmitter<IPizza[]>();

  public pizzas: IPizza[] = [];
  public totalPizzas = 0;
  public subTotal = 0;

  private pizzaJSONSubscriber: Subscription = new Subscription();

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.setPizzas();
  }

  ngOnDestroy(): void {
    this.pizzaJSONSubscriber.unsubscribe();
  }

  updatePizzaQuantity(pizza: IPizza, index: number) {
    this.pizzas[index] = pizza;
    this.setSelectedPizza.emit(
      this.pizzas.filter((pizza) => (pizza.quantity as number) > 0)
    );
    this.subTotal = this.pizzaService.getPizzaSubtotal(this.pizzas);
    this.totalPizzas = this.pizzaService.getTotalPizzas(this.pizzas);
  }

  private setPizzas() {
    this.pizzaJSONSubscriber = this.pizzaService
      .getPizzaJSON()
      .subscribe((data: IPizza[]) => {
        this.pizzas = data.filter((pizza) =>
          pizza.available_in_pizzerias.includes(
            this.selectedPizzeria?.id as number
          )
        );
        if (this.selectedPizzas.length > 0) {
          // merge pizzas with selected pizzas
          this.pizzas = this.pizzas.map((pizza) => ({
            ...pizza,
            ...this.selectedPizzas.find(
              (selectedPizza) => pizza.id === selectedPizza.id
            ),
          }));
          this.subTotal = this.pizzaService.getPizzaSubtotal(this.pizzas);
          this.totalPizzas = this.pizzaService.getTotalPizzas(this.pizzas);
        }
      });
  }
}
