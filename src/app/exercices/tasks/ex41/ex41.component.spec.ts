import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex41Component } from './ex41.component';

describe('Ex41Component', () => {
  let component: Ex41Component;
  let fixture: ComponentFixture<Ex41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
