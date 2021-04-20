import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import * as EmailValidator from 'email-validator';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  calIngeridasProc;
  calPerdidasProc;
  aguaTomadaProc;
  calIngeridas;
  calPerdidas;
  aguaTomada;
  usuario = "Torugo";

  constructor(public navCtrl: NavController, public alertController: AlertController) { }

  ngOnInit() {
  }

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Dados Processados com Sucesso',
      subHeader: 'Todas as informações estão corretas',
      message: 'Verifique seu progesso',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

  }
  procInfos(aguaTomada,calPerdidas,calIngeridas){
    this.aguaTomadaProc = aguaTomada/2000;
    this.calPerdidasProc = calPerdidas/2000;
    this.calIngeridasProc = calIngeridas/2000;
    this.aguaTomada = 0;
    this.calPerdidas = 0;
    this.calIngeridas = 0;
    this.showAlertSucesso();
  }
}
