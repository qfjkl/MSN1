import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnostiqueIntelligentPage } from './diagnostique-intelligent.page';

describe('DiagnostiqueIntelligentPage', () => {
  let component: DiagnostiqueIntelligentPage;
  let fixture: ComponentFixture<DiagnostiqueIntelligentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnostiqueIntelligentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnostiqueIntelligentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
