import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex63Component } from './ex63.component';

describe('Ex63Component', () => {
  let component: Ex63Component;
  let fixture: ComponentFixture<Ex63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex63Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
