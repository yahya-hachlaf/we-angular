import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex62Component } from './ex62.component';

describe('Ex62Component', () => {
  let component: Ex62Component;
  let fixture: ComponentFixture<Ex62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex62Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
