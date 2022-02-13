import { TestBed } from "@angular/core/testing";
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

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PizzeriaComponent,
        DashboardComponent,
        PizzaComponent,
        PizzaOrderCalculationComponent,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
      ],
      providers: [PizzaService],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FieldPulseAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("FieldPulseAngular");
  });
});
