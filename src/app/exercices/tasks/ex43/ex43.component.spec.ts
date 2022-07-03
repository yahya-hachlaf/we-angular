import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex43Component } from './ex43.component';

describe('Ex43Component', () => {
  let component: Ex43Component;
  let fixture: ComponentFixture<Ex43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex43Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
