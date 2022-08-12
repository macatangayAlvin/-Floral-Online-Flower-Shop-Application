import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationBellPage } from './notification-bell.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationBellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationBellPageRoutingModule {}
