import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  constructor(public alertController: AlertController) { }

  public AlimentosIngeridos: String;
  public AguaTomada: String;
  public CaloriasIngeridas: String;

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
  }

  ngOnInit() {
  }

}
