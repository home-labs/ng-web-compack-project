import { Component } from '@angular/core';

import {
    NgWebCompack
} from 'projects/ng-web-compack/src/public_api';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    constructor(
        private sidePanelService: NgWebCompack.Services.SidePanel
    ) {

    }

    onClick() {
        this.sidePanelService.require2Slide();
    }

    onRequire2Slide() {
        this.sidePanelService.slideHorizontally();
    }

}
