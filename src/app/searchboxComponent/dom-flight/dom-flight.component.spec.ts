import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomFlightComponent } from './dom-flight.component';

describe('DomFlightComponent', () => {
  let component: DomFlightComponent;
  let fixture: ComponentFixture<DomFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
