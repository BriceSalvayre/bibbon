import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit {

  public lastMeal : any= [{
    meal_type : "bottle",
    meal_qte : "0",
    meal_date : "0"
  },{
  meal_type : "bottle",
    meal_qte : "0",
    meal_date : "0"
  }];

  public nextHour = 0;
  public url = "diary";

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(
    public http: HttpClient,
    public modalController: ModalController,
    public service: UserService 
  ) { 
    // Concaténation de l'url dans le service et de la page 
    this.url = this.service.APIurl + this.url ;
  }

  
  ngOnInit() {
    this.getData();
  }

  

    /**
   * Récupère les données via un requête HTTP (GET)
   * Stockage des données dans "table"
   * @returns "meal"
   */
     getData(){
      this.http.get(this.url).subscribe(
       (response) =>{
        this.lastMeal = response;
         //this.nextHour = this.lastMeal[0].meal_date +3;
         console.log(this.lastMeal[0].meal_date +3)
         console.log(this.lastMeal[0].meal_date)
         return this.lastMeal;
       },
       (err) => {
         console.log(err);
       }
     )
   }

}
