import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex23Component } from './ex23.component';

describe('Ex23Component', () => {
  let component: Ex23Component;
  let fixture: ComponentFixture<Ex23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
