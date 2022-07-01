import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex32Component } from './ex32.component';

describe('Ex32Component', () => {
  let component: Ex32Component;
  let fixture: ComponentFixture<Ex32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
