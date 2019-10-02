import {
    Component,
    ViewChild
} from '@angular/core';

// import { AsyncSidePanel } from 'ng-web-compack/async-side-panel';
// import { SidePanel } from 'ng-web-compack/side-panel';
import { AsyncSidePanel } from 'projects/ng-web-compack/async-side-panel';
import { SidePanel } from 'projects/ng-web-compack/side-panel';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {

    @ViewChild('asyncSidePanel', { static: false }) asyncSidePanel: AsyncSidePanel.SidePanelComponent;

    @ViewChild('sidePanel', { static: false }) sidePanel: SidePanel.SidePanelComponent;

    collectionPromise:  Promise<any[]>;

    private collection: any[];

    private _accomplish: Function;

    private loaded: boolean;

    constructor(

    ) {

        this.loaded = false;

        this.collectionPromise = new Promise(
            (accomplish: () => void) => {
                this._accomplish = accomplish;
            }
        );

        setTimeout(
            () => {
                this.collection = [1];

                this._accomplish(this.collection);
            }, 600
        );
    }

    onClick(mouseEvent: MouseEvent) {

        if (this.loaded) {
            this.asyncSidePanel.toggle(mouseEvent.target);
        } else {
            setTimeout(
                () => {
                    this.loaded = true;
                    this.asyncSidePanel.toggle(mouseEvent.target);
                }, 600
            );
        }

    }

}
