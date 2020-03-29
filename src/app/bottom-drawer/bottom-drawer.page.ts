import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bottom-drawer',
  templateUrl: './bottom-drawer.page.html',
  styleUrls: ['./bottom-drawer.page.scss'],
})
export class BottomDrawerPage implements OnInit {

  constructor(
    private nacCtrl: NavController
  ) { }

  ngOnInit() {
  }
  back() {
    this.nacCtrl.navigateBack('home');
  }
}
