import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
})
export class SuportePage implements OnInit {

  constructor(public alertController: AlertController) { }

  public Email: String;
  public Telefone: String;
  public Problema: String;

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Ticket Enviado',
      message: 'Seu Ticket foi aberto, aguarde retorno via email',
      buttons: ['OK']
    });

    await alert.present();
  }

  enviarProblemas(){
    this.showAlertSucesso();
    this.Email = "";
    this.Telefone = "";
    this.Problema = "";
  }

  ngOnInit() {
  }

}
