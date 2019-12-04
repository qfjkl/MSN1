import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadprojetPage } from './loadprojet.page';

describe('LoadprojetPage', () => {
  let component: LoadprojetPage;
  let fixture: ComponentFixture<LoadprojetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadprojetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadprojetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
