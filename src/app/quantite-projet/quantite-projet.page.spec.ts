import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantiteProjetPage } from './quantite-projet.page';

describe('QuantiteProjetPage', () => {
  let component: QuantiteProjetPage;
  let fixture: ComponentFixture<QuantiteProjetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantiteProjetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantiteProjetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
