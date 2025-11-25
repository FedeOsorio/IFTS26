import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Hys } from './hys';

describe('Hys', () => {
  let component: Hys;
  let fixture: ComponentFixture<Hys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, Hys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
