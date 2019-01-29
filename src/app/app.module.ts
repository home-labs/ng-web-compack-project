import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
    SidePanelModule
} from 'projects/ng-web-compack/src/public_api';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        SidePanelModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
