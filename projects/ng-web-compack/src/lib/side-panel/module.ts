import {
    NgModule,
    ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Services } from '../services/namespace';

import { SidePanelComponent } from './component';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SidePanelComponent
    ],
    exports: [
        SidePanelComponent
    ]
})
export class SidePanelModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SidePanelModule,
            providers: [
                Services.SidePanel
            ]
        };
    }

}
