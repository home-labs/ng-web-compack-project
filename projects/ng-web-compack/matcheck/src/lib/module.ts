import {
    NgModule
    // , ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule
    , ReactiveFormsModule

} from '@angular/forms';
import {
    MatCheckboxModule
    // , MAT_CHECKBOX_CLICK_ACTION
} from '@angular/material/checkbox';

import { NgCoolFilterPipeModule } from '@actjs.on/ng-cool-filter-pipe';

import { MatCheckboxGroupComponent } from './components/index';


@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , ReactiveFormsModule
        , MatCheckboxModule
        , NgCoolFilterPipeModule
    ],
    declarations: [
        MatCheckboxGroupComponent
    ],
    exports: [
        MatCheckboxGroupComponent
    ]
})
export class NgMatcheckModule {

    // static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: NgMatcheckModule,
    //         providers: [

    //         ]
    //     };
    // }

}
