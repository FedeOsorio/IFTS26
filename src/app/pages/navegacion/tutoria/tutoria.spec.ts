import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutoria } from './tutoria';

describe('Tutoria', () => {
  let component: Tutoria;
  let fixture: ComponentFixture<Tutoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
