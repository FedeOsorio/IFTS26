import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Gir } from './gir';

describe('Gir', () => {
  let component: Gir;
  let fixture: ComponentFixture<Gir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, Gir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
