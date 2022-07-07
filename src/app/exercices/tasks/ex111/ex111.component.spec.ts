import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex111Component } from './ex111.component';

describe('Ex111Component', () => {
  let component: Ex111Component;
  let fixture: ComponentFixture<Ex111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
