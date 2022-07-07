import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex113Component } from './ex113.component';

describe('Ex113Component', () => {
  let component: Ex113Component;
  let fixture: ComponentFixture<Ex113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
