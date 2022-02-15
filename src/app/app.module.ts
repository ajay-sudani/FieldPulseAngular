import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { PizzaService } from "./core/services/pizza.service";
import { AppComponent } from "./app.component";
import { PizzeriaComponent } from "./pizzerias/pizzerias.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaOrderCalculationComponent } from "./pizza-order-calculation/pizza-order-calculation.component";
import { PizzaCardComponent } from './pizza-card/pizza-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzeriaComponent,
    DashboardComponent,
    PizzaComponent,
    PizzaOrderCalculationComponent,
    PizzaCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
