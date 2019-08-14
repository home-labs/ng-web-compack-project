import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { SidePanelModule } from 'projects/ng-web-compack/src/side-panel/src/public-api';
import { SidePanelModule } from 'ng-web-compack/side-panel';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        SidePanelModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
