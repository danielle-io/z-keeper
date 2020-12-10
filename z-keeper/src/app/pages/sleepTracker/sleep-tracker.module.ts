import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SleepTrackerPage } from './sleep-tracker.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SleepTrackerPage
      }
    ])
  ],
  declarations: [SleepTrackerPage]
})
export class SleepTrackerPageModule {}
