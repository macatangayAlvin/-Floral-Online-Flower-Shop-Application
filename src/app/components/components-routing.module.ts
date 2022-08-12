import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsPage } from './components.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentsPage
  },
  {
    path: 'notification-bell',
    loadChildren: () => import('./notification-bell/notification-bell.module').then( m => m.NotificationBellPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsPageRoutingModule {}
