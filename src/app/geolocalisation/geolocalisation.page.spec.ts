import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalisationPage } from './geolocalisation.page';

describe('GeolocalisationPage', () => {
  let component: GeolocalisationPage;
  let fixture: ComponentFixture<GeolocalisationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocalisationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocalisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
