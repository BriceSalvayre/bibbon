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


  constructor( public modalController: ModalController,public toastController: ToastController) { }

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
    console.log(form.value);
    this.presentToast(form);
    this.dismiss();
  }
  async presentToast(form) {
    const toast = await this.toastController.create({
      message: 'Sauvegarder pour un repas au '+form.value.type +"\n"+`l'enfant à bu :`+form.value.value,
      duration: 3000
    });
    toast.present();
  }
}
