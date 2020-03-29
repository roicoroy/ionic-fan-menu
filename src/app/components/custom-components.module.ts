import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PopmenuComponent } from './popmenu/popmenu.component';
import { IonFanComponent } from './ion-fan/ion-fan.component';
import { CircularNavigationComponent } from './circular-navigation/circular-navigation.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    declarations: [
        PopmenuComponent,
        IonFanComponent,
        CircularNavigationComponent
    ],
    entryComponents: [
        PopmenuComponent,
        IonFanComponent,
        CircularNavigationComponent
    ],
    exports: [
        PopmenuComponent,
        IonFanComponent,
        CircularNavigationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CustomComponentsModule {
}