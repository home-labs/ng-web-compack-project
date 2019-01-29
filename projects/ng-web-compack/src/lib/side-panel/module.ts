import {
    NgModule,
    ModuleWithProviders
} from '@angular/core';

import { Services } from '../services/namespace';

import { SidePanelComponent } from './component';


@NgModule({
    imports: [

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
