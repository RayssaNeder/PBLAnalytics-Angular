import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresPesquisaComponent } from './professores-pesquisa.component';

describe('ProfessoresPesquisaComponent', () => {
  let component: ProfessoresPesquisaComponent;
  let fixture: ComponentFixture<ProfessoresPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessoresPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoresPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
