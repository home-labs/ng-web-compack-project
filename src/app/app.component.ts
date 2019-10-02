import {
    Component,
    ViewChild
} from '@angular/core';

// import { AsyncSidePanel } from 'ng-web-compack/async-side-panel';
import { AsyncSidePanel } from 'projects/ng-web-compack/async-side-panel';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {

    @ViewChild('asyncSidePanel', { static: false }) asyncSidePanel: AsyncSidePanel.SidePanelComponent;

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
            }, 800
        );
    }

    onClick(mouseEvent: MouseEvent) {

        if (this.loaded) {
            this.asyncSidePanel.toggle();
        } else {
            setTimeout(
                () => {
                    this.loaded = true;
                    this.asyncSidePanel.toggleBy(mouseEvent.target);
                }, 800
            );
        }

    }

}
