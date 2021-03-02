import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { MatcheckModule } from '@actjs.on/ng-web-compack/matcheck';
import { MatcheckModule } from 'projects/ng-web-compack/matcheck/public-api';

import { MatcheckComponent } from './component';


@NgModule({
    imports: [
        MatcheckModule
        // MatcheckModule.forRoot()
        , BrowserModule
    ],
    declarations: [
        MatcheckComponent
    ],
    exports: [
        MatcheckModule
        , MatcheckComponent
        , BrowserModule
    ],
    providers: []
})
export class MatcheckExampleModule { }
