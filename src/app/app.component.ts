import {
    Component,
    ViewChild
} from '@angular/core';

import { SidePanelAsyncComponent } from '@actjs.on/ng-web-compack/side-panel/async';
// import { SidePanelAsyncComponent } from 'projects/ng-web-compack/side-panel/async';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {

    @ViewChild('asyncSidePanel', { static: false }) asyncSidePanel: SidePanelAsyncComponent;

    collectionPromise: Promise<any[]>;

    private collection: any[];

    private _accomplish: Function;

    private loaded: boolean;

    constructor(

    ) {
        this.asyncSidePanel = {} as SidePanelAsyncComponent;

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
