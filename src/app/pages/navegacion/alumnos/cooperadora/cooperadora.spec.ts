import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cooperadora } from './cooperadora';

describe('Cooperadora', () => {
  let component: Cooperadora;
  let fixture: ComponentFixture<Cooperadora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cooperadora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cooperadora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
