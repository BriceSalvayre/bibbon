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

  // initialize the page "url"
  public url = "modal";

  // initialization of the objet "meal"
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
      // Concatenation of the service url and the page url
      this.url = this.service.APIurl + this.url ;
    }
  
  //On initialization set value of "bibValue"
  ngOnInit() {
    var i;
    for(i=0; i<=300; i+=10){
      this.bibValue.push(i);
    }
  }


  onSubmit(form: NgForm){
    //gather input data
    this.meal = form.value;

    //Submit HTTP request
    this.service.postData(this.url,this.meal);

    // Open Toast with meal values
    this.presentToast(this.meal);

    // Close modal
    this.dismiss();
  }

  // Close modal
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
  
  async presentToast(meal) {
    const toast = await this.toastController.create({
      message: `l'enfant à bu : `+meal.meal_qte,
      duration: 3000
    });
    toast.present();
  }

}
