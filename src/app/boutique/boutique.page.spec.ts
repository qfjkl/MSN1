import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquePage } from './boutique.page';

describe('BoutiquePage', () => {
  let component: BoutiquePage;
  let fixture: ComponentFixture<BoutiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
