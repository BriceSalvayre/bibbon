import { UserService } from './../../services/user.service';
import { Component, OnInit, Query } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpRequest } from "@angular/common/http";
import { of, Observable } from 'rxjs';

@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.page.html",
  styleUrls: ["./subscription.page.scss"],
})
export class SubscriptionPage  implements OnInit {
  public url = "http://localhost:3000/subscription";
  public tableau :any;
  private request: Observable<any>;

  constructor(
    public http: HttpClient,
    private user: UserService,
    ) {
  }
  
  onSubmit(form: NgForm) {
    // Parse des données du formulaire
    const dataForm = form.value;

    //Ajout des données formulaire dans mon services
    /*this.user.addData(dataForm);
    console.log(this.user.getData());*/
    
    // ceci marche parfaitement
    this.user.addData([dataForm]);
    this.postData();


    console.log(this.tableau);
  
  }
  ngOnInit() {
    
    this.storeData();

  }

  postData(){
    this.http.post(this.url,this.user.getData()).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  storeData(){
    this.http.get(this.url).subscribe(
      (response) => {
        console.log(response);
        this.tableau = response;
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
