import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { SidePanel } from '@actjs.on/ng-web-compack/side-panel';
// import { SidePanel } from 'projects/ng-web-compack/side-panel';

// import { SidePanelAsyncModule } from '@actjs.on/ng-web-compack/side-panel';
import { SidePanelModule } from 'projects/ng-web-compack/side-panel/side-panel';

import { AsyncSidePanelExampleComponent } from './component';


@NgModule({
    imports: [
        BrowserModule
        , SidePanelModule
        // , SidePanel.SidePanelModule
    ],
    declarations: [
        AsyncSidePanelExampleComponent
    ],
    exports:[
        AsyncSidePanelExampleComponent
    ],
    providers: []
})
export class AsyncSidePanelExampleModule { }
