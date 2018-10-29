import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalInsercaoTarefaPage } from '../modal-insercao-tarefa/modal-insercao-tarefa.page';
import { Tarefa } from '../estruturas/estrutura-tarefas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  private info;
  private tarefas = new Array();
  private cont: number;

  constructor(public modal: ModalController) {
    this.cont = 0;
  }

  async mostrar() {
    const pagina = await this.modal.create({
      component: ModalInsercaoTarefaPage,
      componentProps: { titulo: 'Adicionar Nova Tarefa' }
    });
    await pagina.present();

    const res = (await pagina.onWillDismiss()).data;

    const tarefa = new Tarefa(res.id ? this.contador() : res.id, res.data, res.atividade, res.descricao, res.conteudo, res.status);

    this.tarefas.push(tarefa);

  }
  async teste(id) {
    let tarefaAlt;
    this.tarefas.forEach(x => {
      if (x.id === id) {
        tarefaAlt = x;
      }
    });
    const pagina = await this.modal.create({
      component: ModalInsercaoTarefaPage,
      componentProps: {
        titulo: 'Alterar Tarefa',
        tarefa: tarefaAlt
      }
    });
    await pagina.present();
  }

  contador() {
    this.cont++;
    return this.cont;
  }

  ngOnInit() {
  }
}
