import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionPage } from './suggestion.page';

describe('SuggestionPage', () => {
  let component: SuggestionPage;
  let fixture: ComponentFixture<SuggestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
