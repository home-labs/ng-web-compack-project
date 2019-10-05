import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AsyncSidePanelModule } from '@rplaurindo/ng-web-compack/async-side-panel';
// import { AsyncSidePanelModule } from 'projects/ng-web-compack/async-side-panel';


@NgModule({
    imports: [
        BrowserModule
        , AsyncSidePanelModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
