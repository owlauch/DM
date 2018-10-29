import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import { Tarefa } from '../estruturas/estrutura-tarefas';

@Component({
  selector: 'app-modal-insercao-tarefa',
  templateUrl: './modal-insercao-tarefa.page.html',
  styleUrls: ['./modal-insercao-tarefa.page.scss'],
})
export class ModalInsercaoTarefaPage implements OnInit {
  private titulo: String;
  private tarefa = new Tarefa(0, null, null, null, null, true);

  constructor(public params: NavParams, public modal: ModalController) {
    this.titulo = this.params.get('titulo');
    console.log(this.params.get('tarefa'));
    if (this.params.get('tarefa')) {
      this.tarefa.id = this.params.get('tarefa').id;
      this.tarefa.data = this.params.get('tarefa').data;
      this.tarefa.atividade = this.params.get('tarefa').atividade;
      this.tarefa.descricao = this.params.get('tarefa').descricao;
      this.tarefa.conteudo = this.params.get('tarefa').conteudo;
      this.tarefa.status = this.params.get('tarefa').status;
    }
  }

  async salvar() {
    console.log(this.tarefa);
    await this.modal.dismiss(this.tarefa);
  }
  async fechar() {
    await this.modal.dismiss();
  }
  ngOnInit() {
  }

}
