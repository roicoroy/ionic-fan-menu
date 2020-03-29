import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.scss'],
})
export class MenuGridComponent implements OnInit {

  public options = {
    "defaultPosition": "bottomRight",
    "showIcons": true,
    "onlyIcons": true,
    "defaultOpen": false,
    "spinable": false,
    "buttonOpacity": 1,
    "offset": -50,
    "buttonWidth": 140,
    "buttonCrossImgSize": 40,
    "angle": 32,
    "radius": 135,
    "buttonBackgroundColor": 'var(--brand-menu-backgound)',
    "buttonFontColor": 'var(--brand-menu-font)',
    "wingIconSize": 20,
    "wingFontColor": "var(--brand-menu-font)"
  }
  public startAngles = {
    "topLeft": 0,
    "topRight": 0,
    "bottomRight": 205,
    "bottomLeft": 0
  }
  public wings = [
    {
      'title': 'Our Products',
      'color': 'var(--brand-menu-backgound)',
      'icon': {
        'name': 'assets/custom-icons/ios-custom-glass.svg',
        'color': 'var(--brand-menu-font)',
      },
      'route': 'our-products'
    },
    {
      'title': 'News Feed',
      'color': 'var(--brand-menu-backgound)',
      'icon': {
        'name': 'assets/custom-icons/ios-custom-paper.svg',
        'color': 'var(--brand-menu-font)',
      },
      'route': 'news'
    },
    {
      'title': 'Our Brand',
      'color': 'var(--brand-menu-backgound)',
      'icon': {
        'name': 'assets/custom-icons/ios-custom-horn.svg',
        'color': 'var(--brand-menu-font)',
      },
      'route': 'our-brand'
    },
    {
      'title': 'Game',
      'color': 'var(--brand-menu-backgound)',
      'icon': {
        'name': 'assets/custom-icons/ios-custom-crown.svg',
        'color': 'var(--brand-menu-font)',
      },
      'route': 'game'
    },
    {
      'title': 'Logout',
      'color': 'var(--brand-menu-backgound)',
      'icon': {
        'name': 'assets/custom-icons/ios-icon-settings.svg',
        'color': 'var(--brand-menu-font)',
      },
      'route': 'logout'
    }
  ];


  ngOnInit() { }

  constructor(
    private router: Router,
    public alertController: AlertController
  ) { }
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }
  appRoute($event) {
    if ($event.route === 'logout') {
      console.log('logout pressed!');
      console.log($event.route);
    } else {
      // this.router.navigateByUrl($event.route);
    }
  }
}