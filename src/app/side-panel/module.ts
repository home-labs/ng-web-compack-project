import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { SidePanel } from '@actjs.on/ng-web-compack/side-panel';
// import { SidePanel } from 'projects/ng-web-compack/side-panel';

// import { SidePanelAsyncModule } from '@actjs.on/ng-web-compack/side-panel';
import { SidePanelAsyncModule } from 'projects/ng-web-compack/side-panel/side-panel';

import { SidePanelAsyncComponent } from './component';


@NgModule({
    imports: [
        BrowserModule
        , SidePanelAsyncModule
        // , SidePanel.SidePanelAsyncModule
    ],
    declarations: [

    ],
    providers: []
})
export class SidePanelAsyncExampleModule { }
