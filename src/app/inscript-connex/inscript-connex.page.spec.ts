import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptConnexPage } from './inscript-connex.page';

describe('InscriptConnexPage', () => {
  let component: InscriptConnexPage;
  let fixture: ComponentFixture<InscriptConnexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptConnexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptConnexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
