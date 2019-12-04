import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeconnexionPage } from './deconnexion.page';

describe('DeconnexionPage', () => {
  let component: DeconnexionPage;
  let fixture: ComponentFixture<DeconnexionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeconnexionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeconnexionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
