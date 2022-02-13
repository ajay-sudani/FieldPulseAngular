import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { PizzaService } from "../core/services";
import { PizzaComponent } from "./pizza.component";

describe("PizzaComponent", () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaComponent],
      imports: [HttpClientModule],
      providers: [PizzaService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
