import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  calIngeridasProc = 1500;
  calPerdidasProc = 2800;
  aguaTomadaProc = 2600;
  calIngeridas;
  calPerdidas;
  aguaTomada;

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
