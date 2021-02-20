import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// import { AsyncSidePanelModule } from '@actjs.on/ng-web-compack/async-side-panel';
import { Async } from 'projects/ng-web-compack/side-panel/async';


@NgModule({
    imports: [
        BrowserModule
        , Async.AsyncModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
