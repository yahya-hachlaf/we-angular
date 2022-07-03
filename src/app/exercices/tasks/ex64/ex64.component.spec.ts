import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex64Component } from './ex64.component';

describe('Ex64Component', () => {
  let component: Ex64Component;
  let fixture: ComponentFixture<Ex64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
