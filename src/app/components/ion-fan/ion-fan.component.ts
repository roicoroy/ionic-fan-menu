import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ion-fan',
  templateUrl: './ion-fan.component.html',
  styleUrls: ['./ion-fan.component.scss'],
})
export class IonFanComponent implements OnInit {
  // openMenu: Boolean = false;
  classToggled;
  classActive;
  active;
  fabActive;
  constructor(
    private router: Router
  ) { }
  ngOnInit() { }
  IonViewWillEnter() {
    return this.classToggled = false;
  }
  open() {
    this.fabActive = !this.fabActive;
    this.classToggled = !this.classToggled;
    console.log(this.fabActive, this.classToggled);
    return;
  }
  activateButton() {
    return;
  }
  // updateActive(friend){
  //   this.active = friend;
  //   }
  navigate(route) {
    this.router.navigateByUrl(route);
  }
}
