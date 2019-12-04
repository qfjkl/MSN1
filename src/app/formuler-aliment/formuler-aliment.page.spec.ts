import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulerAlimentPage } from './formuler-aliment.page';

describe('FormulerAlimentPage', () => {
  let component: FormulerAlimentPage;
  let fixture: ComponentFixture<FormulerAlimentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulerAlimentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulerAlimentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
