import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

import {
  DatabaseService,
  Overnight,
  Scale,
} from "../../services/database.service";

@Component({
  selector: "app-logs",
  templateUrl: "logs.page.html",
  styleUrls: ["logs.page.scss"],
})
export class LogsPage {
  currentView = "sleepLogSegment";
  overnightLogs: Overnight[];
  scaleLogs: Scale[];
  hideOvernight: boolean = true;
  hideScale: boolean = true;

  constructor(
    private db: DatabaseService,
    public alertController: AlertController
  ) {}

  ionViewWillEnter() {
    this.overnightLogs = this.db.getOvernightLogs();
    this.scaleLogs = this.db.getScaleLogs();
    this.checkForEmptyLogs();
  }

  checkForEmptyLogs() {
    if (!this.overnightLogs || Object.keys(this.overnightLogs).length === 0) {
      this.hideOvernight = true;
    } else {
      this.hideOvernight = false;
    }
    if (!this.scaleLogs || Object.keys(this.scaleLogs).length === 0) {
      this.hideScale = true;
    } else {
      this.hideScale = false;
    }
  }

  logChanged(event: any) {
    this.currentView = event.detail.value;
  }

  deleteLog(log: any, functionType: String) {
    this.presentAlertConfirm(log, functionType);
  }

  async presentAlertConfirm(log, functionType: String) {
    const alert = await this.alertController.create({
      message:
        "Are you sure you'd like to delete this entry from " +
        log.month +
        "/" +
        log.day +
        "?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Delete",
          cssClass: "alert-delete",
          handler: () => {
            if (functionType === "overnight") {
              this.db.deleteOvernightEntry(log);
              this.db.getOvernightLogs();
            } else {
              this.db.deleteScaleEntry(log);
              this.db.getScaleLogs();
            }
            this.checkForEmptyLogs();
          },
        },
      ],
    });

    await alert.present();
  }
}
