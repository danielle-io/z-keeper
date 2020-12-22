import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BottomNavPage } from "./bottom-nav.page";


const routes: Routes = [
  {
    path: "bottom-nav.page",
    component: BottomNavPage,
    children: [
      {
        path: "homeTab",
        children: [
          {
            path: "",
            loadChildren: '../pages/home/home.module#HomePageModule',
          },
        ],
      },
      {
        path: "logsTab",
        children: [
          {
            path: "",
            loadChildren: "../pages/logs/logs.module#LogsPageModule",
          },
        ],
      },
      {
        path: "sleepTrackerTab",
        children: [
          {
            path: "",
            loadChildren: '../pages/sleepTracker/sleep-tracker.module#SleepTrackerPageModule',
          },
        ],
      },
      {
        path: "",
        redirectTo: "../pages/home/home.module",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "../pages/home/home.module",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomNavRoutingModule {}
