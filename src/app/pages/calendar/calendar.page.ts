import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  date: string;
  type: 'string';
  title: string;

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event._d);
    this.title = $event._d;
  }


}
