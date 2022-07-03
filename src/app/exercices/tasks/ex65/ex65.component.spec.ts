import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex65Component } from './ex65.component';

describe('Ex65Component', () => {
  let component: Ex65Component;
  let fixture: ComponentFixture<Ex65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
