import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosExtranjeros } from './titulos-extranjeros';

describe('TitulosExtranjeros', () => {
  let component: TitulosExtranjeros;
  let fixture: ComponentFixture<TitulosExtranjeros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitulosExtranjeros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitulosExtranjeros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
