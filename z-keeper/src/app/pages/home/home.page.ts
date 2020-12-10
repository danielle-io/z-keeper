import { Component } from "@angular/core";
import { SleepScale } from "../../data/sleep-scale";
import { ToastController } from "@ionic/angular";
import {
  DatabaseService,
} from "../../services/database.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  sliderValue = "Move the slider to reflect how you're feeling.";
  currentView = "sliderViewSegment";
  position = 0;

  sleepScaleValues = SleepScale.ScaleValues;

  constructor(
    public toastController: ToastController,
    private db: DatabaseService
  ) {}

  getChecked(value) {
    return this.position === value;
  }

  viewChanged(event) {
    this.currentView = event.detail.value;
  }

  radioSelect(position) {
    this.position = position;
  }

  radioDeselect() {
    this.position = 0;
  }

  getDisabled() {
    return this.position === 0;
  }

  radioFocus(position) {}

  submitRating() {
    if (this.position !== 0) {
      this.presentToast();
      this.db.insertRating(this.position);
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message:
        "<ion-icon name='checkmark'></ion-icon> Your rating has been submitted.",
      duration: 2000,
      color:"dark"
    });
    toast.present();
  }

  rangeChanged(event) {
    this.position = event;
    switch (event) {
      case 1: {
        this.sliderValue = this.sleepScaleValues[0].text;
        break;
      }
      case 2: {
        this.sliderValue = this.sleepScaleValues[1].text;
        break;
      }
      case 3: {
        this.sliderValue = this.sleepScaleValues[2].text;
        break;
      }
      case 4: {
        this.sliderValue = this.sleepScaleValues[3].text;
        break;
      }
      case 5: {
        this.sliderValue = this.sleepScaleValues[4].text;
        break;
      }
      case 6: {
        this.sliderValue = this.sleepScaleValues[5].text;

        break;
      }
      case 7: {
        this.sliderValue = this.sleepScaleValues[6].text;
        break;
      }
      default: {
        this.sliderValue = "";
        break;
      }
    }
  }
}
