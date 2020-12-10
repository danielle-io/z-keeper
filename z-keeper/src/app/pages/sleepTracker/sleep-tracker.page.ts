import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import {
  LastNight,
  DatabaseService,
  Overnight,
  Scale,
} from "../../services/database.service";
import { generate } from "shortid";

@Component({
  selector: "app-sleep-tracker",
  templateUrl: "sleep-tracker.page.html",
  styleUrls: ["sleep-tracker.page.scss"],
})

export class SleepTrackerPage {
  startTracking = true;
  stopTracking = false;
  private lastNight: LastNight = {
    id: "",
    start_sleep: new Date(),
    month: "",
    day: ""
  };

  constructor(
    public toastController: ToastController,
    private db: DatabaseService
  ) {}

  async ionViewWillEnter() {
    this.lastNight = this.db.getLastNight();
    if (
      this.lastNight &&
      this.lastNight.id !== undefined &&
      this.lastNight.id !== ""
    ) {
      this.stopTracking = true;
      this.startTracking = false;
    }
  }

  startTrackingClicked() {
    this.presentToast("start");
    this.stopTracking = true;
    this.startTracking = false;
    this.db.setLastNight();
    this.lastNight = this.db.getLastNight();
  }

  stopTrackingClicked() {
    this.presentToast("stop");
    this.stopTracking = false;
    this.startTracking = true;
    // Stop tracking means the LastNight object and the
    // new end time can be combined to create a new log
    this.db.addOvernightLog();
  }

  async presentToast(messageType: string) {
    var messageText = "Your have begun tracking. Goodnight!";
    if (messageType === "stop"){
      messageText = "Your have stopped tracking. Good morning!";
    }
    const toast = await this.toastController.create({
      message: messageText,
      color: "dark",
      duration: 2000,
      cssClass: "toast-style",
    });
    toast.present();
  }
}
