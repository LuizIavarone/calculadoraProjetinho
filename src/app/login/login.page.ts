import { AuthService } from './../services/auth.service';
import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';
import {NavController, LoadingController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import * as EmailValidator from 'email-validator';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Desenvolvida pelo Neto

  public userLogin: User = {};
  public senha;
  public sucesso;
  private loading: any;
  private sucess: any;
  
  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private authSevice: AuthService
    ) { }

  async showAlertErro() {
    const alert = await this.alertController.create({
      header: 'Email/Senha Errados',
      subHeader: 'Algo de errado não está certo',
      message: 'Verifique as informações e tente novamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Login realizado com sucesso, clique em OK para continuar',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.navigateRoot('/home');
          }
        }
      ]
    });

    await alert.present();
  }

  async showAlertErroLogin() {
    const alert = await this.alertController.create({
      header: 'Erro ao logar',
      subHeader: 'Algo de errado não está certo',
      message: 'Verifique as informações e tente novamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  validador_login(email,senha){
    // Necessario alterar para o validador do Firebase    
    // Alteração Feita Netão, vou deixar o código só pq ficou bonito hahahaha
    // Blz seu gordo hahahaha
    if(this.userLogin.email=="admin@admin"){
      if(this.userLogin.password=="admin123"){
        this.sucesso = 1;
        this.showAlertSucesso();
      }else{
        this.sucesso = 0;
        this.showAlertErro();
      }
    }else{
      this.sucesso = 0;
      this.showAlertErro();
    }
  }

  // Até aqui

  async login(){
    await this.mensagemDeCarregando();

    try{
      await this.authSevice.login(this.userLogin);
      this.sucess = 1;
    } catch(error){
      this.sucess = 0;
      console.error(error);
    } finally{
      this.loading.dismiss();
      if(this.sucess>0){
        this.showAlertSucesso();
      }else{
        this.showAlertErroLogin();
      }
    }
  }

// Função feita por Neto + Luiz por conta da integração do firebase

async mensagemDeCarregando() {
  this.loading = await this.loadingController.create({cssClass: 'my-custom-class',message: 'Por Favor Aguarde . . . ',});
  return this.loading.present();
}


  ngOnInit() {
  }

}
