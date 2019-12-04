import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportCompositionPage } from './rapport-composition.page';

describe('RapportCompositionPage', () => {
  let component: RapportCompositionPage;
  let fixture: ComponentFixture<RapportCompositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportCompositionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportCompositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
