import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBreakfastComponent } from './product-breakfast.component';

describe('ProductBreakfastComponent', () => {
  let component: ProductBreakfastComponent;
  let fixture: ComponentFixture<ProductBreakfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBreakfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
