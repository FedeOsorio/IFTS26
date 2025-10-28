import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioAcademico } from './calendario-academico';

describe('CalendarioAcademico', () => {
  let component: CalendarioAcademico;
  let fixture: ComponentFixture<CalendarioAcademico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioAcademico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioAcademico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
