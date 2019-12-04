import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrePage } from './parametre.page';

describe('ParametrePage', () => {
  let component: ParametrePage;
  let fixture: ComponentFixture<ParametrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
