import { Router } from "@angular/router";
import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public url = "login";
  //public urlTest = "http://localhost:3000/login/mail/pass";
  public users: any;

  constructor(
    public http: HttpClient,
    public service: UserService,
    public route: Router
  ) {
    this.url = this.service.APIurl + this.url;
  }

  ngOnInit() {}

  async onSubmit(form: NgForm) {
    if (form.value.user_mail != 0 && form.value.user_password != 0) {
      const url2 =
        this.url + "/" + form.value.user_mail + "/" + form.value.user_password;

      this.login(url2);
    }
  }

  async login(url) {
		this.http.get(url).subscribe(
			(response) => {
				if (response[0].length == 0) {
					console.log("error");
				} 
        else {
					this.route.navigateByUrl("/home");
					this.service.addData(response[0]);
					console.log(this.service.dataUser);
				}
			},
			(err) => {
				console.log(err);
			}
		);
	}

}
