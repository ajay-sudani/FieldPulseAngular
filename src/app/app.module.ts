import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { PizzaService } from "./core/services/pizza.service";
import { EventsService } from "./core/services/events.service";
import { AppComponent } from "./app.component";
import { PizzeriaComponent } from "./pizzerias/pizzerias.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaOrderCalculationComponent } from "./pizza-order-calculation/pizza-order-calculation.component";
import { PizzaCardComponent } from "./pizza-card/pizza-card.component";
import { PizzeriaCardComponent } from "./pizzeria-card/pizzeria-card.component";
import { OrderedPizzaComponent } from "./ordered-pizza/ordered-pizza.component";
import { EventsComponent } from "./events/events.component";
import { EventCardComponent } from './event-card/event-card.component';
import { EventDetailsDialogComponent } from './event-details-dialog/event-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzeriaComponent,
    DashboardComponent,
    PizzaComponent,
    PizzaOrderCalculationComponent,
    PizzaCardComponent,
    PizzeriaCardComponent,
    OrderedPizzaComponent,
    EventsComponent,
    EventCardComponent,
    EventDetailsDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [PizzaService, EventsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
