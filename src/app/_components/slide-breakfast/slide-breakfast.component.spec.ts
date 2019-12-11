import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBreakfastComponent } from './slide-breakfast.component';

describe('SlideBreakfastComponent', () => {
  let component: SlideBreakfastComponent;
  let fixture: ComponentFixture<SlideBreakfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBreakfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
