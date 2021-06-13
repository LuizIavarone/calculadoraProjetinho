import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public alertController: AlertController) { }

  public AlimentosIngeridos: String;
  public AguaTomada: String;
  public CaloriasIngeridas: String;

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Café da Manhã Enviado',
      message: 'Seu Café da Manhã foi enviada para a nutricionista',
      buttons: ['OK']
    });

    await alert.present();
  }

  enviarCafedaManha(){
    this.showAlertSucesso();
    this.CaloriasIngeridas = "";
    this.AguaTomada = "";
    this.AlimentosIngeridos = "";
  }

  ngOnInit() {
  }

}

