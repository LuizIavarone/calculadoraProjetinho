import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userName = "Toguro";
  userAge = "47";
  userPeso = "130";
  userAltura = "1.87";
  userGoal = "Fazer um projetinho"

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async editPeso() {
    const alert = await this.alertCtrl.create({
      header: 'Coloque a alteração que deseja',
      message: 'Atenção ao atualizar suas informações',
      inputs: [
        {
          name: 'Peso',
          placeholder: 'Peso'
        }
      ],
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

    editarPeso(){
      this.editPeso();
    }

}
