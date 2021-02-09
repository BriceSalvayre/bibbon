import { Component, OnInit, Query } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpRequest } from "@angular/common/http";

@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.page.html",
  styleUrls: ["./subscription.page.scss"],
})
export class SubscriptionPage  implements OnInit {
  constructor(public http: HttpClient) {}
  public url = "http://localhost:3000/subscription";
  
  onSubmit(form: NgForm) {
    
    const dataForm = form.value;
    console.log(dataForm);
    //this.getData();
    //this.postData();
  
    /*const myurl = new HttpRequest("GET",url);
    this.http.request(myurl).subscribe((response) =>{
      const resultat = form.value;
      console.log(resultat);
      console.log(response);
    })*/
  }
  ngOnInit() {

  }


  getData(){
    this.http.get(this.url).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }

    );
  }
  postData(){
    this.http.post(this.url, "").subscribe(
      (response) => {
        console.log(response);
      }
    )
  }
}
