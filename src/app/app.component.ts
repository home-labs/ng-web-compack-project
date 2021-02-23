import {
    Component,
    ViewChild
} from '@angular/core';

// import { AsyncComponent } from '@actjs.on/ng-web-compack/side-panel';
// import { AsyncComponent } from 'projects/ng-web-compack/side-panel';

import { SidePanel } from '@actjs.on/ng-web-compack/side-panel';
// import { SidePanel } from 'projects/ng-web-compack/side-panel/side-panel';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {

    // @ViewChild('asyncSidePanel', { static: false }) asyncSidePanel: AsyncComponent;
    @ViewChild('asyncSidePanel', { static: false })
    asyncSidePanel!: SidePanel.AsyncComponent;

    collectionPromise: Promise<any[]>;

    private collection: any[];

    private _accomplish: Function;

    private loaded: boolean;

    constructor(

    ) {

        this.collection = [];
        this._accomplish = function() {};

        this.loaded = false;

        this.collectionPromise = new Promise(
            (accomplish: (value: any[]) => void) => {
                this._accomplish = accomplish;
            }
        );

        setTimeout(
            () => {
                this.collection = [];

                this._accomplish(this.collection);
            }, 800
        );
    }

    onClick(mouseEvent: MouseEvent) {

        if (this.loaded) {
            this.asyncSidePanel.toggle();
        } else {
            this.loaded = true;
            this.asyncSidePanel.toggleBy(mouseEvent.target as EventTarget);
        }

    }

}
