import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex51Component } from './ex51.component';

describe('Ex51Component', () => {
  let component: Ex51Component;
  let fixture: ComponentFixture<Ex51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
