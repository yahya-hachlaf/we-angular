import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex33Component } from './ex33.component';

describe('Ex33Component', () => {
  let component: Ex33Component;
  let fixture: ComponentFixture<Ex33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
