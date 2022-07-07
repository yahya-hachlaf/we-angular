import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex112Component } from './ex112.component';

describe('Ex112Component', () => {
  let component: Ex112Component;
  let fixture: ComponentFixture<Ex112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
