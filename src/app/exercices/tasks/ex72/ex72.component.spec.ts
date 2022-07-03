import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex72Component } from './ex72.component';

describe('Ex72Component', () => {
  let component: Ex72Component;
  let fixture: ComponentFixture<Ex72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
