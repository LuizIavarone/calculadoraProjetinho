import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensagemparanutriPageRoutingModule } from './mensagemparanutri-routing.module';

import { MensagemparanutriPage } from './mensagemparanutri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensagemparanutriPageRoutingModule
  ],
  declarations: [MensagemparanutriPage]
})
export class MensagemparanutriPageModule {}
