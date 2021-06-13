import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mensagemparanutri',
  templateUrl: './mensagemparanutri.page.html',
  styleUrls: ['./mensagemparanutri.page.scss'],
})
export class MensagemparanutriPage implements OnInit {

  public mensagemNutricionista: String;
  public tituloParaNutri: String;

  constructor(public alertController: AlertController) { }

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Mensagem Enviada',
      subHeader: 'Aguarde o retorno',
      message: 'Sua mensagem foi enviada, aguarde a resposta da sua nutricionista',
      buttons: ['OK']
    });

    await alert.present();
  }

  enviaMensagem(){
    this.showAlertSucesso();
    this.mensagemNutricionista = "";
    this.tituloParaNutri = "";
  }

  ngOnInit() {
  }

}
