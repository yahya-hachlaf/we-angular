import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex61Component } from './ex61.component';

describe('Ex61Component', () => {
  let component: Ex61Component;
  let fixture: ComponentFixture<Ex61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex61Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
