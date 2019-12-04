import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { choisirIngredientPage } from './choisirIngredient.page';

describe('choisirIngredientPage', () => {
  let component: choisirIngredientPage;
  let fixture: ComponentFixture<choisirIngredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ choisirIngredientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(choisirIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
