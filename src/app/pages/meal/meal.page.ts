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
  public url = "http://localhost:3000/meal";
  public meal :any =[{
    meal_type : "bottle",
    meal_qte : "0",
    meal_date : "0"
  }]

  constructor(
    public http: HttpClient,
    public modalController: ModalController,
    public service: UserService
    ) {
      
      


     /* this.http.get('http://localhost:8100/meal').subscribe((response) => {
        console.log(response);
      },
      (err)=>{
        console.log(err);
        console.log("2");
      });
   */   
  }
  ngOnInit() {
    //this.addData( await this.service.getUrlData(this.url))
    //this.service.getUrlData(this.url)
    this.getData();
  
   //this.service.getUrlDataMeal(this.url);
   
   
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
