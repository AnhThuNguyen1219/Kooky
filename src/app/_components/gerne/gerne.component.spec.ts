import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerneComponent } from './gerne.component';

describe('GerneComponent', () => {
  let component: GerneComponent;
  let fixture: ComponentFixture<GerneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
