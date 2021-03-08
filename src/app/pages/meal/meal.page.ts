import { UserService } from './../../services/user.service';
import { ModalPage } from './modal/modal.page';
import { Component,OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ModalController } from '@ionic/angular';
@Component({
  selector: "app-meal",
  templateUrl: "./meal.page.html",
  styleUrls: ["./meal.page.scss"],
})
export class MealPage implements OnInit{
  babyName = "Joe";
  public url = "meal";
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
      this.url = this.service.APIurl + this.url ;
    }
  
  ngOnInit() {
    this.getData();   
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  addData(dataEntry){
    this.meal = dataEntry;
  }

  getData(){
     this.http.get(this.url).subscribe(
      (response) =>{
        this.meal = response;
        console.log(this.meal)
        return this.meal;
      },
      (err) => {
        console.log(err);
      },
      ()=>{
        
      }
    )
  }
}
