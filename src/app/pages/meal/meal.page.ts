import { ModalPage } from './modal/modal.page';
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ModalController } from '@ionic/angular';
@Component({
  selector: "app-meal",
  templateUrl: "./meal.page.html",
  styleUrls: ["./meal.page.scss"],
})
export class MealPage {
  babyName = "Joe";
  public userList;

  constructor(public http: HttpClient, public modalController: ModalController) {
      this.http.get('http://localhost:8100/meal').subscribe((response) => {
        console.log(response);
      },
      (err)=>{
        console.log(err);
        console.log("2");
      });
      
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  }

