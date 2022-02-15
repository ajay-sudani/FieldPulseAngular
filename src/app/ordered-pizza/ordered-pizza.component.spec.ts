import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedPizzaComponent } from './ordered-pizza.component';

describe('OrderedPizzaComponent', () => {
  let component: OrderedPizzaComponent;
  let fixture: ComponentFixture<OrderedPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderedPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
