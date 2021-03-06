import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
        BrowserModule
        , FormsModule
        , ReactiveFormsModule
        , MatCheckboxModule
        , NgCoolFilterPipeModule
    ],
    declarations: [
        MatCheckboxGroupComponent
    ],
    exports: [
        BrowserModule
        , MatCheckboxGroupComponent
        , MatCheckboxModule
        , FormsModule
        , ReactiveFormsModule
    ]
})
export class MatcheckModule { }
