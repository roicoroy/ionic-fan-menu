import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ion-fan',
  templateUrl: './ion-fan.component.html',
  styleUrls: ['./ion-fan.component.scss'],
})
export class IonFanComponent implements OnInit {
  // openMenu: Boolean = false;
  classToggled
  constructor() { }

  ngOnInit() {}
  // togglePopupMenu() {
  //   return this.openMenu = !this.openMenu;
  // }
  IonViewWillEnter(){
    return this.classToggled = false;
  }
  open() {
    console.log('ipoen');
    return this.classToggled = !this.classToggled;
  }
}
