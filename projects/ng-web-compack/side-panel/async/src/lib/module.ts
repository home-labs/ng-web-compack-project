import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncComponent } from './component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AsyncComponent
    ],
    exports: [
        AsyncComponent
    ]
})
export class AsyncModule { }
