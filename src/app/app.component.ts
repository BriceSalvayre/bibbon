import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  name = "Brice";
  baseIcon = "../assets/svg/";
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Repas',
      url: '/meal',
      icon: 'meal'
    },
    {
      
      title: 'Calendrier',
      url: '/calendar',
      icon: 'calendar'
    },
    {
      title: 'Journal',
      url: '/diary',
      icon: 'book'
    },
    {
      title: 'Configuration',
      url: '/configuration',
      icon: 'setting'
    },
    {
      title: 'Signup',
      url: '/subscription',
      icon: 'family1'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
