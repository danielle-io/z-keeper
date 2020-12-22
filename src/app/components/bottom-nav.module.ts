import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';

import { BottomNavRoutingModule } from './bottom-nav-routing';
import { BottomNavPage } from './bottom-nav.page';

const routes: Routes = [
  {
    path: 'bottom-nav.page',
    component: BottomNavPage,
    children: [
      {
        path: 'homeTab',
        loadChildren: '../pages/home/home.module#HomePageModule'
      },
      {
        path: 'sleepTrackerTab',
        loadChildren: '../pages/sleepTracker/sleep-tracker.module#SleepTrackerPageModule'
      },
      {
        path: 'logsTab',
        loadChildren: '../pages/logs/logs.module#LogsPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'bottom-nav.page/homeTab'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottomNavRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BottomNavPage]
})

export class BottomNavModule { }