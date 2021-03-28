import { UserService } from './../../services/user.service';
import { ModalPage } from './modal/modal.page';
import { Component,OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ModalController } from '@ionic/angular';
import {Plugins} from "@capacitor/core";
const { BluetoothSerial } = Plugins;

@Component({
  selector: "app-meal",
  templateUrl: "./meal.page.html",
  styleUrls: ["./meal.page.scss"],
})

export class MealPage implements OnInit{
  
  babyName = "Joe";

  // Initialisation de l'url de la page
  public url = "meal/";

  // Initialisation du repas
  public meal :any =[{
    meal_type : "bottle",
    meal_qte : "0",
    meal_date : "0"
  }]

  constructor(
    public http: HttpClient,
    public modalController: ModalController,
    public service: UserService )
    
    {
      // Concaténation de l'url dans le service et de la page 
      this.url = this.service.APIurl + this.url + this.service.currentChild[0].id_child;
    }

  // Lors de l'initialisation de la page
  ngOnInit() {
    this.getData();
    BluetoothSerial
  .isEnabled()
  .then((response) => {
    const message = response.enabled ? 'enabled' : 'disabled';
    console.log(`Bluetooth is ${message}`);
  })
  .catch(() => {
    console.log('Error checking bluetooth status');
  });
  }
  


  // Affichage de la page modal sur la page meal
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  /**
   * Récupère les données via un requête HTTP (GET)
   * Stockage des données dans "meal"
   * @returns "meal"
   */
  getData(){
     this.http.get(this.url).subscribe(
      (response) =>{
        this.meal = response[0];
        console.log(this.meal)
        return this.meal;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
