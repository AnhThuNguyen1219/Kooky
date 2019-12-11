import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterBreakfastComponent } from './poster-breakfast.component';

describe('PosterBreakfastComponent', () => {
  let component: PosterBreakfastComponent;
  let fixture: ComponentFixture<PosterBreakfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterBreakfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
