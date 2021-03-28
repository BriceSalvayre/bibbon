import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public url = "home/";
  //public child : any;

  constructor(
    public http: HttpClient,
    public modalController: ModalController,
    public service: UserService 
  ) {
    this.url = this.service.APIurl + this.url + this.service.dataUser[0].id_user ;
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
          this.service.currentChild = response[0]
           console.log(this.service.currentChild)
           return this.service.currentChild;
         },
         (err) => {
           console.log(err);
         }
       )
     }
}
