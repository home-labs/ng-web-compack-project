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

    collectionPromise:  Promise<Array<any>>;
    private collection: Array<any>;
    private _accomplish: Function;

    constructor(
        private sidePanelService: NgWebCompack.Services.SidePanel
    ) {

        // this.collectionPromise = new Promise(
        //     (accomplish: Function) => {
        //         this._accomplish = accomplish;
        //     }
        // );

        // const
        //     interval = setInterval(
        //         () => {
        //             this.collection = [1];

        //             this._accomplish(this.collection);

        //             clearInterval(interval);
        //         }, 5000

        //     );
    }

    onClick() {
        this.sidePanelService.require2Slide();
    }

    onRequire2Slide() {
        this.sidePanelService.slideHorizontally();
    }

}
