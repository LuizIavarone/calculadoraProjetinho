import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosnutricionaisPage } from './infosnutricionais.page';

const routes: Routes = [
  {
    path: '',
    component: InfosnutricionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosnutricionaisPageRoutingModule {}
