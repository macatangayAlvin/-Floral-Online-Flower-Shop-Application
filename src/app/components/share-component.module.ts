import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NotificationBellPage } from './notification-bell/notification-bell.page';

@NgModule({
    declarations: [NotificationBellPage],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [NotificationBellPage]
})

export class ShareComponentModule {}