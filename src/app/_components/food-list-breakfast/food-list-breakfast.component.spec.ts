import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListBreakfastComponent } from './food-list-breakfast.component';

describe('FoodListBreakfastComponent', () => {
  let component: FoodListBreakfastComponent;
  let fixture: ComponentFixture<FoodListBreakfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodListBreakfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodListBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
