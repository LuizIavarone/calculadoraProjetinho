import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosnutricionistaPage } from './infosnutricionista.page';

const routes: Routes = [
  {
    path: '',
    component: InfosnutricionistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosnutricionistaPageRoutingModule {}
