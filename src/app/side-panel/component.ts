import {
    Component,
    ViewChild
} from '@angular/core';

// import { SidePanel } from '@actjs.on/ng-web-compack/side-panel';
import { SidePanel } from 'projects/ng-web-compack/side-panel/side-panel';


@Component({
    selector: 'app-side-panel-async',
    templateUrl: './template.html',
    styleUrls: ['./style.styl']
})
export class SidePanelAsyncComponent {

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
            this.asyncSidePanel.toggleBy((mouseEvent.target)!);
        }

    }

}
