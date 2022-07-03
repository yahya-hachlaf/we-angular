import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex42Component } from './ex42.component';

describe('Ex42Component', () => {
  let component: Ex42Component;
  let fixture: ComponentFixture<Ex42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
