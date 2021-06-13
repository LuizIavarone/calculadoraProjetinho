import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-outrasrefeicoes',
  templateUrl: './outrasrefeicoes.page.html',
  styleUrls: ['./outrasrefeicoes.page.scss'],
})
export class OutrasrefeicoesPage implements OnInit {

  constructor(public alertController: AlertController) { }

  public AlimentosIngeridos: String;
  public AguaTomada: String;
  public CaloriasIngeridas: String;
  public HorariodaRefeicao: String;

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Almoço Enviado',
      message: 'Seu Almoço foi enviado para sua nutricionista',
      buttons: ['OK']
    });

    await alert.present();
  }

  enviarJantar(){
    this.showAlertSucesso();
    this.CaloriasIngeridas = "";
    this.AguaTomada = "";
    this.AlimentosIngeridos = "";
    this.HorariodaRefeicao = "";
  }

  ngOnInit() {
  }

}
