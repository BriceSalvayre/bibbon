import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-meal",
  templateUrl: "./meal.page.html",
  styleUrls: ["./meal.page.scss"],
})
export class MealPage {
  babyName = "Joe";
  public userList;

  constructor(public http: HttpClient) {
      this.http.get('http://localhost:8100/meal').subscribe((response) => {
        console.log(response);
      },
      (err)=>{
        console.log(err);
        console.log("2");
      });
  }

  
  }

