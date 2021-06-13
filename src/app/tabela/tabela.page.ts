import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.page.html',
  styleUrls: ['./tabela.page.scss'],
})
export class TabelaPage implements OnInit {

  constructor(public alertController: AlertController) { }

  public AlimentosIngeridos: String;
  public AguaTomada: String;
  public CaloriasIngeridas: String;

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Janta Enviada',
      message: 'Sua Janta foi enviada para a nutricionista',
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
