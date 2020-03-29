import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  classToggled: boolean;
  constructor(
    private router: Router,
 
  ) { }
  ngOnInit() {
  }
  IonViewWillEnter(){
    return this.classToggled = false;
  }
  openMenu() {
    return this.classToggled = !this.classToggled;
  }
  home() {
    this.router.navigateByUrl('home');
  }
  ourBrand() {
    this.router.navigateByUrl('our-brand');
  }
  ourProducts() {
    this.router.navigateByUrl('our-products');
  }
  newsFeeds() {
    this.router.navigateByUrl('news');
  }
  gamePage() {
    this.router.navigateByUrl('game');
  }
  appLogout() {

  }
}
