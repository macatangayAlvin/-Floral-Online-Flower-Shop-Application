import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationBellPageRoutingModule } from './notification-bell-routing.module';

import { NotificationBellPage } from './notification-bell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationBellPageRoutingModule
  ],
  declarations: [NotificationBellPage]
})
export class NotificationBellPageModule {}
