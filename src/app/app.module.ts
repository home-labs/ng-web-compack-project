import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// import { AsyncSidePanelModule } from 'ng-web-compack/async-side-panel';
// import { SidePanelModule } from 'ng-web-compack/side-panel';
import { AsyncSidePanelModule } from 'projects/ng-web-compack/async-side-panel';
import { SidePanelModule } from 'projects/ng-web-compack/side-panel';


@NgModule({
    imports: [
        BrowserModule
        , AsyncSidePanelModule
        , SidePanelModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
