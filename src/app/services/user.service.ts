import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  public dataUser = [{id_user : 0}];
   

  public tableau : {};

  public APIurl = "https://safe-scrubland-34327.herokuapp.com/";

  private meal = {};

  constructor(public http:HttpClient) { }

  getData(){
    return this.dataUser;
  }

  addData(dataEntry){
    this.dataUser = dataEntry;
  }

  /**
   * récupère l'information de l'url pointé
   * @param url l'url de la page que pointe le router
   * @return : Object
   */
  getUrlData(url){
    this.http.get(url).subscribe(
      (response) => {
        console.log(response);
        return response;
      },
      (err) => {
        console.log(err);
      }

    );
  }
  /**
   * POST les données dans le body pointé
   * @param url l'url de la page que pointe le router
   * @param data données JSON
   */
  postData(url:string,data:any){
    this.http.post(url,data).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  getUrlDataMeal(url){
    this.http.get(url).subscribe(
      (response) => {
        this.meal = response;
        console.log(this.meal);
        return this.meal;
        
      },
      (err) => {
        console.log(err);
      }

    );
  }

  storeData(url){
    this.http.get(url).subscribe(
      (response) => {
        this.tableau = response;
        console.log("1");
      },
      (err) => {
        console.log(err)
      },
    )
  }

  getLoginData(){
    console.log("2");
    return this.tableau;

  }
}
