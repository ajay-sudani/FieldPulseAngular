import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { PizzaService } from "../core/services";
import { PizzeriaComponent } from "./pizzerias.component";

describe("PizzeriaComponent", () => {
  let component: PizzeriaComponent;
  let fixture: ComponentFixture<PizzeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzeriaComponent],
      imports: [HttpClientModule],
      providers: [PizzaService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
