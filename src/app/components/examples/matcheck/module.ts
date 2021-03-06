import { NgModule } from '@angular/core';

// import { MatcheckModule } from '@actjs.on/ng-web-compack/matcheck';
import { MatcheckModule } from 'projects/ng-web-compack/matcheck/public-api';

import { MatcheckExampleComponent } from './component';


@NgModule({
    imports: [
        MatcheckModule
    ],
    declarations: [
        MatcheckExampleComponent
    ],
    exports: [
        MatcheckModule
        , MatcheckExampleComponent
    ],
    providers: []
})
export class MatcheckExampleModule { }
