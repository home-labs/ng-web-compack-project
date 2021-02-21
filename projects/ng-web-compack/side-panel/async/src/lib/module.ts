import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidePanelAsyncComponent } from './component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SidePanelAsyncComponent
    ],
    exports: [
        SidePanelAsyncComponent
    ]
})
export class SidePanelAsyncModule { }
