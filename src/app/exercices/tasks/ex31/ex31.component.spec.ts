import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex31Component } from './ex31.component';

describe('Ex31Component', () => {
  let component: Ex31Component;
  let fixture: ComponentFixture<Ex31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
