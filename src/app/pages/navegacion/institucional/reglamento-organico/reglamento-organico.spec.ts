import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglamentoOrganico } from './reglamento-organico';

describe('ReglamentoOrganico', () => {
  let component: ReglamentoOrganico;
  let fixture: ComponentFixture<ReglamentoOrganico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReglamentoOrganico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglamentoOrganico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
