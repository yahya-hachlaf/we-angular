import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex81Component } from './ex81.component';

describe('Ex81Component', () => {
  let component: Ex81Component;
  let fixture: ComponentFixture<Ex81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex81Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
