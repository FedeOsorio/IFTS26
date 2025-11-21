import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasExamen } from './mesas-examen';

describe('MesasExamen', () => {
  let component: MesasExamen;
  let fixture: ComponentFixture<MesasExamen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesasExamen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesasExamen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
