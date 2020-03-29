import { Component, OnInit, Input } from "@angular/core";
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.scss"]
})
export class AppHeaderComponent implements OnInit {
  @Input("title") title: string;
  @Input("back_button") back_button: boolean;
  @Input("back_to") back_to_url: boolean;
  constructor(
    private navCtrl: NavController
  ) {}
  ngOnInit() {
  }
  back(url) {
    this.navCtrl.navigateBack(url);
  }
}
