import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PizzaService {
  constructor(private http: HttpClient) {}

  public getPizzeriasJSON(): Observable<any> {
    return this.http.get('./assets/json/pizzerias.json');
  }

  public getPizzaJSON(): Observable<any> {
    return this.http.get('./assets/json/pizza.json');
  }

  public getUsTaxRate(): Observable<any> {
    return this.http.get('./assets/json/settings.json');
  }
}
