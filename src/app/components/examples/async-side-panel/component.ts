import {
    Component,
    ViewChild
} from '@angular/core';

// import { SidePanel } from '@actjs.on/ng-web-compack/side-panel';
import { SidePanel } from 'projects/ng-web-compack/side-panel/src/public-api';


@Component({
    selector: 'app-async-side-panel',
    templateUrl: './template.html',
    styleUrls: ['./style.styl']
})
export class AsyncSidePanelExampleComponent {

    // @ViewChild('asyncSidePanel', { static: false }) asyncSidePanel: SidePanelComponent;
    @ViewChild('asyncSidePanel', { static: false })
    asyncSidePanel!: SidePanel.SidePanelComponent;

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
            this.asyncSidePanel.toggleBy((mouseEvent.target)!);
        }

    }

}
