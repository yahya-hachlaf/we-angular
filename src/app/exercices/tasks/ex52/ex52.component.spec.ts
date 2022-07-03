import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex52Component } from './ex52.component';

describe('Ex52Component', () => {
  let component: Ex52Component;
  let fixture: ComponentFixture<Ex52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
