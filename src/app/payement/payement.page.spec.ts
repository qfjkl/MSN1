import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementPage } from './payement.page';

describe('PayementPage', () => {
  let component: PayementPage;
  let fixture: ComponentFixture<PayementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
