import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasPesquisaComponent } from './disciplinas-pesquisa.component';

describe('DisciplinasPesquisaComponent', () => {
  let component: DisciplinasPesquisaComponent;
  let fixture: ComponentFixture<DisciplinasPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinasPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinasPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
