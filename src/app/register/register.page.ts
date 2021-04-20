import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import * as EmailValidator from 'email-validator';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  senha1;
  senha2;
  nome;
  email;
  idade;

  constructor(public navCtrl: NavController, public alertController: AlertController) { }

  async showAlertErroSenha() {
    const alert = await this.alertController.create({
      header: 'Senhas Diferentes',
      subHeader: 'Algo de errado não está certo',
      message: 'Verifique as informações e tente novamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showAlertErroEmail() {
    const alert = await this.alertController.create({
      header: 'Email Invalido',
      subHeader: 'Algo de errado não está certo',
      message: 'Verifique as informações e tente novamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showAlertErroNome() {
    const alert = await this.alertController.create({
      header: 'Nome Invalido',
      subHeader: 'Algo de errado não está certo',
      message: 'Verifique as informações e tente novamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showAlertErroIdade() {
    const alert = await this.alertController.create({
      header: 'Idade Vazia',
      subHeader: 'Algo de errado não está certo',
      message: 'Verifique as informações e tente novamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Cadastro Realizado com Sucesso',
      subHeader: 'Todas as informações estão corretas',
      message: 'Verifique seu email',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.navigateRoot('/login');
          }
        }
      ]
    });

    await alert.present();
  }

  validadorRegistro(senha1,senha2,nome,email,idade){
    if(!(EmailValidator.validate(email))){
      this.showAlertErroEmail();
    }else if(senha1 != senha2){
      this.showAlertErroSenha();
    }else{
      if(email==undefined || email==null || email==""){
        this.showAlertErroEmail();
      }else if(idade==null){
        this.showAlertErroIdade();
      }else if(nome==undefined || nome==null || nome==""){
        this.showAlertErroNome();
      }else{
        this.showAlertSucesso();
      }
    }
  }

  ngOnInit() {
  }

}
