import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidePanelComponent } from './component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SidePanelComponent
    ],
    exports: [
        SidePanelComponent
    ]
})
export class AsyncSidePanelModule { }
