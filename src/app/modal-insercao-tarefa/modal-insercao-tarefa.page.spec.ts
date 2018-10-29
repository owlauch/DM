import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInsercaoTarefaPage } from './modal-insercao-tarefa.page';

describe('ModalInsercaoTarefaPage', () => {
  let component: ModalInsercaoTarefaPage;
  let fixture: ComponentFixture<ModalInsercaoTarefaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInsercaoTarefaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInsercaoTarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
