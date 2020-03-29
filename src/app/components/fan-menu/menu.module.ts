/**
 * menu.module
 */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuContainerComponent } from './menu-container.component';
import { MenuOptions } from './menu-options.service';
import { MenuWingComponent } from './menu-wing.component';
import { SpinService } from './menu-spin.service';

/* HammerJS */
import 'hammerjs';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        MenuContainerComponent,
        MenuWingComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        MenuContainerComponent,
    ],
    providers: [
        MenuOptions,
        SpinService,
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class FanMenuModule {
}
