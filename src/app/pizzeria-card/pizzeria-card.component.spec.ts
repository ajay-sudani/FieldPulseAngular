import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeriaCardComponent } from './pizzeria-card.component';

describe('PizzeriaCardComponent', () => {
  let component: PizzeriaCardComponent;
  let fixture: ComponentFixture<PizzeriaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzeriaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzeriaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
