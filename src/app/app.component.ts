import {
    Component,
    ViewChild
} from '@angular/core';

// import { NgWebCompack } from 'ng-web-compack';
// import { SidePanel } from 'projects/ng-web-compack/src/side-panel/src/public-api';
import { SidePanel } from 'ng-web-compack/side-panel';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {

    // @ViewChild('sidePanel') sidePanel: SidePanel.SidePanelComponent;
    @ViewChild('sidePanel', { static: false }) sidePanel: SidePanel.SidePanelComponent;

    collectionPromise:  Promise<any[]>;
    private collection: any[];
    private _accomplish: Function;

    constructor(

    ) {

        this.collectionPromise = new Promise(
            (accomplish: () => void) => {
                this._accomplish = accomplish;
            }
        );

        const
            interval = setInterval(
                () => {
                    this.collection = [1];

                    this._accomplish(this.collection);

                    clearInterval(interval);
                }, 3000
            );
    }

    onClick() {
        this.sidePanel.toggle();
    }

}
