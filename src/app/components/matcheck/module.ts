import { NgModule } from '@angular/core';

import { MatcheckModule } from '@actjs.on/ng-web-compack/matcheck';
// import { MatcheckModule } from 'projects/ng-web-compack/matcheck/public-api';

import { MatcheckComponent } from './component';


@NgModule({
    imports: [
        MatcheckModule
    ],
    declarations: [
        MatcheckComponent
    ],
    exports: [
        MatcheckModule
        , MatcheckComponent
    ],
    providers: []
})
export class MatcheckExampleModule { }
