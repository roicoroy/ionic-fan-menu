import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FanMenuModule } from './fan-menu/menu.module';
import { MenuGridComponent } from './menu-grid/menu-grid.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { PopmenuComponent } from './popmenu/popmenu.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { IonFanComponent } from './ion-fan/ion-fan.component';
import { CircularNavigationComponent } from './circular-navigation/circular-navigation.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FanMenuModule
    ],
    declarations: [
        AppHeaderComponent,
        MenuGridComponent,
        PopmenuComponent,
        NavigationMenuComponent,
        IonFanComponent,
        CircularNavigationComponent
    ],
    entryComponents: [
        AppHeaderComponent,
        MenuGridComponent,
        PopmenuComponent,
        NavigationMenuComponent,
        IonFanComponent,
        CircularNavigationComponent
    ],
    exports: [
        AppHeaderComponent,
        FanMenuModule,
        MenuGridComponent,
        PopmenuComponent,
        NavigationMenuComponent,
        IonFanComponent,
        CircularNavigationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class BrandsComponentsModule {
}