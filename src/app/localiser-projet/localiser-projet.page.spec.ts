import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaliserProjetPage } from './localiser-projet.page';

describe('LocaliserProjetPage', () => {
  let component: LocaliserProjetPage;
  let fixture: ComponentFixture<LocaliserProjetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaliserProjetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaliserProjetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
