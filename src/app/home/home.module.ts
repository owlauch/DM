import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ModalInsercaoTarefaPage } from '../modal-insercao-tarefa/modal-insercao-tarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ModalInsercaoTarefaPage],
  entryComponents: [ModalInsercaoTarefaPage]
})
export class HomePageModule {}
