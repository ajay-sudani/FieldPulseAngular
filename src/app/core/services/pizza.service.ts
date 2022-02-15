import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPizzeria, IPizza } from "../models";

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
}
