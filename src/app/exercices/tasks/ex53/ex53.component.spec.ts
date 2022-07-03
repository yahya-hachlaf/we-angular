import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex53Component } from './ex53.component';

describe('Ex53Component', () => {
  let component: Ex53Component;
  let fixture: ComponentFixture<Ex53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex53Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
