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
  public url = "subscription";
  public tableau :any;
  private request: Observable<any>;

  constructor(
    public http: HttpClient,
    private service: UserService,
    ) {
      this.url = this.service.APIurl + this.url ;
  }
  
  onSubmit(form: NgForm) {
    // Parse des données du formulaire
    const dataForm = form.value;

    //Avant d'envoyer les données dans la BD , contrôle de surface
    // Pregmatch du password (si possible dynamique "onChange") et verif si pass1 et pass2 sont identiques
    // dans la BD contrôle de la saisie du mail si deja existant (crée une procédure pour sécurisé)

    // ici on envoi les données dans la BD
    this.service.addData([dataForm]);
    this.postData();

    //un fois inscrit redirection vers child
    // Trouvé une solution pour l'inscription des "co-parent"


    console.log(this.tableau);
  
  }
  ngOnInit() {
  }

  postData(){
    this.http.post(this.url,this.service.getData()).subscribe(
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
