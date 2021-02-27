import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { NgMatcheckModule } from '@actjs.on/ng-web-compack/matcheck';
import { NgMatcheckModule } from 'projects/ng-web-compack/matcheck/public-api';

import { MatcheckComponent } from './component';


@NgModule({
    imports: [
        BrowserModule
        , NgMatcheckModule
    ],
    declarations: [
        MatcheckComponent
    ],
    exports: [
        MatcheckComponent
    ],
    providers: []
})
export class MatcheckModule { }
