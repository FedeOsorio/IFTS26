import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaProfesional } from './matricula-profesional';

describe('MatriculaProfesional', () => {
  let component: MatriculaProfesional;
  let fixture: ComponentFixture<MatriculaProfesional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculaProfesional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculaProfesional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
