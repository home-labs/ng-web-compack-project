import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SidePanelAsyncModule } from '@actjs.on/ng-web-compack/side-panel/async';
// import { SidePanelAsyncModule } from 'projects/ng-web-compack/side-panel/async';


@NgModule({
    imports: [
        BrowserModule
        , SidePanelAsyncModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
