import {
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidePanelComponent } from './component';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        SidePanelComponent
    ],
    exports: [
        BrowserModule
        , SidePanelComponent
    ]
})
export class SidePanelModule { }
