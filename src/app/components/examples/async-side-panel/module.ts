import { NgModule } from '@angular/core';

import { SidePanelModule } from '@actjs.on/ng-web-compack/side-panel';
// import { SidePanelModule } from 'projects/ng-web-compack/side-panel/src/public-api';

import { AsyncSidePanelExampleComponent } from './component';


@NgModule({
    imports: [
        SidePanelModule
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
