import { Observable } from 'rxjs';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public url = "login";
  //public urlTest = "http://localhost:3000/login/mail";
  public users : any;

  constructor(public service : UserService) {
    this.url = this.service.APIurl + this.url ;
   }

  ngOnInit() {
    //this.service.storeData(this.url2);

  }

  async onSubmit(form: NgForm){
    
    // recupere l'url et la transform pour envoyer un user_mail
    const url2 = this.url+ "/" + form.value.user_mail;
    //console.log(url2);

    //Stock dans le service le resultat de l'url
    this.service.storeData(url2);

    //Récupere le resultat et le stock dans une variable local
    const userLog = await this.login();
    console.log(userLog);
    //Contrôle du password corréspondant 
    if( userLog[0].user_password == form.value.user_password){
        console.log("success !");
    }
    
  }

  /*async login(){
     this.users =  await this.service.getLoginData();
     console.log(this.users);
     return this.users;
  }*/

  // Récupère les données de login dans le service
  async login(){
    this.users = await this.service.getLoginData();
    return this.users;
 }
}