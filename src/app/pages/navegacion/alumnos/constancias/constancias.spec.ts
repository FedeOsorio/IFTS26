import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Constancias } from './constancias';

describe('Constancias', () => {
  let component: Constancias;
  let fixture: ComponentFixture<Constancias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Constancias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Constancias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
