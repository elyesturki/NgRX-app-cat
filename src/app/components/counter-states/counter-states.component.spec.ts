import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterStatesComponent } from './counter-states.component';

describe('CounterStatesComponent', () => {
  let component: CounterStatesComponent;
  let fixture: ComponentFixture<CounterStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
