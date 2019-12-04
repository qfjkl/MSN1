import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { loadProjetPage } from './projet-page.page';

describe('loadProjetPage', () => {
  let component: loadProjetPage;
  let fixture: ComponentFixture<loadProjetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ loadProjetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(loadProjetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
