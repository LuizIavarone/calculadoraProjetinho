import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutrasrefeicoesPageRoutingModule } from './outrasrefeicoes-routing.module';

import { OutrasrefeicoesPage } from './outrasrefeicoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutrasrefeicoesPageRoutingModule
  ],
  declarations: [OutrasrefeicoesPage]
})
export class OutrasrefeicoesPageModule {}
