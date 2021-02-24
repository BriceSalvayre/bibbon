import { UserService } from './../../../services/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  public bibValue = [];
  public url = "modal";

  public meal =[{
    meal_type : "null",
    meal_qte : "0",
    meal_date : "0"
  }]

  constructor( 
    public modalController: ModalController,
    public toastController: ToastController,
    public service: UserService
    ) { 
      this.url = this.service.APIurl + this.url ;
    }

  ngOnInit() {
    var i;
    for(i=0; i<=300; i+=10){
      this.bibValue.push(i);
    }
    console.log(this.bibValue);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  onSubmit(form: NgForm){
    //this.service.getUrlData(this.url);
    //console.log(form.value);
    this.meal = form.value;
    this.service.postData(this.url,this.meal);

    this.presentToast(this.meal);
    this.dismiss();
  }
  
  async presentToast(meal) {
    const toast = await this.toastController.create({
      message: 'Sauvegarder pour un repas au '+meal.meal_type +"\n"+`l'enfant à bu :`+meal.meal_qte,
      duration: 3000
    });
    toast.present();
  }

}
