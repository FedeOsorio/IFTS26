import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInscripcion } from './pre-inscripcion';

describe('PreInscripcion', () => {
  let component: PreInscripcion;
  let fixture: ComponentFixture<PreInscripcion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreInscripcion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreInscripcion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
