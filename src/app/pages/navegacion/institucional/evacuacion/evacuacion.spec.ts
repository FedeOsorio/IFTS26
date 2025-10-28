import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evacuacion } from './evacuacion';

describe('Evacuacion', () => {
  let component: Evacuacion;
  let fixture: ComponentFixture<Evacuacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Evacuacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Evacuacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
