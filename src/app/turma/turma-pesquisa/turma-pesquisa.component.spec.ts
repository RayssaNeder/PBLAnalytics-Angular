import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasPesquisaComponent } from './turma-pesquisa.component';

describe('TurmasPesquisaComponent', () => {
  let component: TurmasPesquisaComponent;
  let fixture: ComponentFixture<TurmasPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmasPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmasPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
