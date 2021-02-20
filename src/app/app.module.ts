import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AsyncModule } from '@actjs.on/ng-web-compack/side-panel';
// import { AsyncModule } from 'projects/ng-web-compack/side-panel';


@NgModule({
    imports: [
        BrowserModule
        , AsyncModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
