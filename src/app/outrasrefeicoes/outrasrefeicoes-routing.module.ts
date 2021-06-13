import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutrasrefeicoesPage } from './outrasrefeicoes.page';

const routes: Routes = [
  {
    path: '',
    component: OutrasrefeicoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutrasrefeicoesPageRoutingModule {}
