import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosnutricionaisPageRoutingModule } from './infosnutricionais-routing.module';

import { InfosnutricionaisPage } from './infosnutricionais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosnutricionaisPageRoutingModule
  ],
  declarations: [InfosnutricionaisPage]
})
export class InfosnutricionaisPageModule {}
