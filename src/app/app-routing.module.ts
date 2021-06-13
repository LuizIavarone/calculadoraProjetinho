import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'dados',
    loadChildren: () => import('./dados/dados.module').then( m => m.DadosPageModule)
  },
  {
    path: 'tabela',
    loadChildren: () => import('./tabela/tabela.module').then( m => m.TabelaPageModule)
  },
  {
    path: 'outrasrefeicoes',
    loadChildren: () => import('./outrasrefeicoes/outrasrefeicoes.module').then( m => m.OutrasrefeicoesPageModule)
  },
  {
    path: 'suporte',
    loadChildren: () => import('./suporte/suporte.module').then( m => m.SuportePageModule)
  },
  {
    path: 'infosnutricionais',
    loadChildren: () => import('./infosnutricionais/infosnutricionais.module').then( m => m.InfosnutricionaisPageModule)
  },
  {
    path: 'infosnutricionista',
    loadChildren: () => import('./infosnutricionista/infosnutricionista.module').then( m => m.InfosnutricionistaPageModule)
  },
  {
    path: 'mensagemparanutri',
    loadChildren: () => import('./mensagemparanutri/mensagemparanutri.module').then( m => m.MensagemparanutriPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
