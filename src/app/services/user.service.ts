import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private dataUser = [{
    user_name: "null",
    user_password: "null",
    user_mail: "null"
}]

  constructor() { }

  getData(){
    return this.dataUser;
  }

  addData(dataEntry){
    this.dataUser = dataEntry;
  }
  dataBaseConnect(){
    
  }
}
