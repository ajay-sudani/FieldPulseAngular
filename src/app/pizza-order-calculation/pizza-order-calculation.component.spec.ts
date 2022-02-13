import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { PizzaService } from "../core/services";
import { PizzaOrderCalculationComponent } from "./pizza-order-calculation.component";

describe("PizzaOrderCalculationComponent", () => {
  let component: PizzaOrderCalculationComponent;
  let fixture: ComponentFixture<PizzaOrderCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaOrderCalculationComponent],
      imports: [HttpClientModule],
      providers: [PizzaService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaOrderCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
