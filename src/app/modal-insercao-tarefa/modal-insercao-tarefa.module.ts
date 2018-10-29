import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalInsercaoTarefaPage } from './modal-insercao-tarefa.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: ModalInsercaoTarefaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalInsercaoTarefaPage, HomePage],
  entryComponents: [HomePage]
})
export class ModalInsercaoTarefaPageModule {}
