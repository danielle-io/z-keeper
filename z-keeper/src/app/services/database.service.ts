import { Platform } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Storage } from "@ionic/storage";
import { generate } from "shortid";

export interface Overnight {
  id: string;
  start_sleep: Date;
  end_sleep: Date;
  day: string;
  month: string;
  year: string;
  hours: number;
  minutes: number;
}

export interface Scale {
  id: string;
  date_time: Date;
  scale_value: number;
  day: string;
  month: string;
  year: string;
}

export interface LastNight {
  id: string;
  start_sleep: Date;
  month: string;
  day: string;
}

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private storage: Storage) {}

  private lastNight: LastNight = {
    id: "",
    start_sleep: new Date(),
    month: "",
    day: "",
  };
  private overnightLogs: Overnight[] = [];
  private scaleLogs: Scale[] = [];

  getOvernightLogs() {
    if (!this.overnightLogs) {
      this.fetchOvernightLogs();
    }
    return this.overnightLogs;
  }

  async fetchOvernightLogs() {
    await this.storage.get("overnight").then((val) => {
      this.overnightLogs = val;
    });
  }

  addOvernightLog() {
    let end_sleep = new Date();
    let convertedDate = this.convertDateToArray(this.lastNight.start_sleep);
    var difference = this.getDifference(end_sleep);
    let allLogs = this.overnightLogs;

    let newLog: Overnight = {
      id: generate(),
      start_sleep: this.lastNight.start_sleep,
      end_sleep: end_sleep,
      day: convertedDate[2],
      month: convertedDate[1],
      year: convertedDate[0],
      hours: difference.hoursDiff,
      minutes: difference.minutesDiff,
    };

    // If there are no logs, create array with new log
    if (!this.overnightLogs || Object.keys(this.overnightLogs).length < 1) {
      allLogs = [newLog];
    } else {
      allLogs.unshift(newLog);
    }
    this.overnightLogs = allLogs;
    this.clearLastNightLog();
    this.storage.set("overnight", allLogs);
  }

  clearAllOvernightLogs() {
    this.storage.set("overnight", {});
    this.overnightLogs = null;
  }

  clearLastNightLog() {
    this.storage.set("lastNight", {});
    this.lastNight = null;
  }

  clearScaleLogs() {
    this.storage.set("scale", {}).then((val) => {
      console.log("Cleared all scale log data");
    });
    this.scaleLogs = null;
  }

  getDifference(end_sleep) {
    var sleepStart_ms = this.lastNight.start_sleep.getTime();
    var sleepEnd_ms = end_sleep.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = sleepEnd_ms - sleepStart_ms;

    // Convert to hours and minutes
    return {
      hoursDiff: Math.floor(difference_ms / (1000 * 60 * 60)),
      minutesDiff: Math.floor((difference_ms / (1000 * 60)) % 60),
    };
  }

  setLastNight() {
    let id = generate();
    let startDate = new Date();
    let convertedDate = this.convertDateToArray(startDate);
    this.lastNight = {
      id: id,
      start_sleep: startDate,
      day: convertedDate[2],
      month: convertedDate[1],
    };
    this.storage.set("lastNight", this.lastNight).then((val) => {});
  }

  async fetchLastNight() {
    return this.storage.get("lastNight").then((val) => {
      if (val) {
        this.lastNight = {
          id: val.id,
          start_sleep: val.start_sleep,
          day: val.day,
          month: val.month,
        };
        return true;
      }
      return false;
    });
  }

  getLastNight() {
    return this.lastNight;
  }

  convertDateToArray(fullDate) {
    return new Date(fullDate).toISOString().slice(2, 10).split("-");
  }

  getScaleLogs() {
    return this.scaleLogs;
  }

  deleteOvernightEntry(log: Overnight) {
    let index = this.overnightLogs.indexOf(log);
    if (index > -1) {
      this.overnightLogs.splice(index, 1);
      this.storage.set("overnight", this.overnightLogs);
    }
  }

  deleteScaleEntry(log: Scale) {
    let index = this.scaleLogs.indexOf(log);
    if (index > -1) {
      this.scaleLogs.splice(index, 1);
      this.storage.set("scale", this.scaleLogs);
    }
  }

  async fetchScaleLogs() {
    return this.storage.get("scale").then((val) => {
      if (val) {
        this.scaleLogs = val;
        return true;
      }
      return false;
    });
  }

  insertRating(rating: number) {
    let scaleLogs = this.scaleLogs;

    let dateTime = new Date();
    let convertedDate = this.convertDateToArray(dateTime);

    let newScaleLog: Scale = {
      id: generate(),
      date_time: dateTime,
      scale_value: rating,
      day: convertedDate[2],
      month: convertedDate[1],
      year: convertedDate[0],
    };

    // If there are no logs, create array with new log
    if (!this.scaleLogs || Object.keys(this.scaleLogs).length < 1) {
      scaleLogs = [newScaleLog];
    } else {
      scaleLogs.unshift(newScaleLog);
    }

    this.scaleLogs = scaleLogs;
    this.storage.set("scale", scaleLogs);
  }
}
