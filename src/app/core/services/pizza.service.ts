import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPizzeria, IPizza, IOrderedPizza } from "../models";

@Injectable()
export class PizzaService {
  constructor(private http: HttpClient) {}

  public getPizzeriasJSON(): Observable<IPizzeria[]> {
    return this.http.get<IPizzeria[]>("./assets/json/pizzerias.json");
  }

  public getPizzaJSON(): Observable<IPizza[]> {
    return this.http.get<IPizza[]>("./assets/json/pizza.json");
  }

  public getUsTaxRate(): Observable<{ us_tax_rate: number }> {
    return this.http.get<{ us_tax_rate: number }>(
      "./assets/json/settings.json"
    );
  }

  /**
   *  Get pizzas sub total (total pizza * pizza price)
   * @param pizzas list of pizza
   * @returns subtotal
   */
  public getPizzaSubtotal = (pizzas: IPizza[]): number => {
    return Number(
      pizzas
        .reduce((total: number, pizza: IPizza) => {
          total += (pizza.quantity || 0) * pizza.price;
          return total;
        }, 0)
        .toFixed(2)
    );
  };

  /**
   *  Get ordered pizzas total tax
   * @param pizzas list of ordered pizzas
   * @returns total tax
   */
  public getOrderedPizzasTotalTax = (orderedPizza: IOrderedPizza[]): number => {
    return Number(
      orderedPizza
        .reduce((total: number, pizza: IOrderedPizza) => {
          total += pizza.tax;
          return total;
        }, 0)
        .toFixed(2)
    );
  };

  /**
   *  Get total pizzas
   * @param pizzas list of ordered pizzas
   * @returns total pizzas
   */
  public getTotalPizzas = (pizzas: IPizza[]): number => {
    return pizzas.reduce((total: number, pizza: IPizza) => {
      return total + (pizza.quantity || 0);
    }, 0);
  };
}
