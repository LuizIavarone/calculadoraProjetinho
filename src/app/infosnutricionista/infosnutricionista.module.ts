import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosnutricionistaPageRoutingModule } from './infosnutricionista-routing.module';

import { InfosnutricionistaPage } from './infosnutricionista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosnutricionistaPageRoutingModule
  ],
  declarations: [InfosnutricionistaPage]
})
export class InfosnutricionistaPageModule {}
