import { AuthService } from './../services/auth.service';
import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';
import {NavController, LoadingController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import * as EmailValidator from 'email-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  
  public userRegister: User = {};
  public nome;
  public idade;
  private loading: any;
  private sucess: any;

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private authSevice: AuthService
    ) { }

  //Desenvolvida pelo Neto
  
  // Funções de alerta
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

  async showAlertErroRegistro() {
    const alert = await this.alertController.create({
      header: 'Erro Durante o Registro',
      subHeader: 'Algo de errado não está certo',
      message: 'Algum erro de rede ou nas suas credenciais impossibilitaram seu cadastro, verifique e tente novamente',
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
        console.log(this.userRegister);
        this.register();
        //this.addItem();
      }
    }
  }

//Até aqui

// Desenvolvida por Luiz

  async register(){
    await this.mensagemDeCarregando();

    try{
      await this.authSevice.register(this.userRegister);
      this.sucess = 1;
    } catch(error){
      this.sucess = 0;
      console.error(error);
    } finally{
      this.loading.dismiss();
      if(this.sucess>0){
        this.showAlertSucesso();
      }else{
        this.showAlertErroRegistro();
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


