import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex71Component } from './ex71.component';

describe('Ex71Component', () => {
  let component: Ex71Component;
  let fixture: ComponentFixture<Ex71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex71Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
