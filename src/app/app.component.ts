import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { DatabaseService } from "./services/database.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private db: DatabaseService
  ) {
    this.initializeApp();
  }

  // For testing: add this call to ngOnInit to wipe all data
  testClearAll() {
    console.log("Cleared all logs");
    this.db.clearAllOvernightLogs();
    this.db.clearLastNightLog();
    this.db.clearScaleLogs();
  }

  async ngOnInit() {
    this.db.fetchOvernightLogs();
    this.db.fetchLastNight();
    this.db.fetchScaleLogs();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
