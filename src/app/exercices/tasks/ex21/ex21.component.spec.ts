import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex21Component } from './ex21.component';

describe('Ex21Component', () => {
  let component: Ex21Component;
  let fixture: ComponentFixture<Ex21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
