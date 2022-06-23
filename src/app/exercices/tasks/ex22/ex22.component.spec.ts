import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex22Component } from './ex22.component';

describe('Ex22Component', () => {
  let component: Ex22Component;
  let fixture: ComponentFixture<Ex22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
