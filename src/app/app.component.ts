import {
    Component,
    ViewChild
} from '@angular/core';

// import { NgWebCompack } from 'projects/ng-web-compack/src/public-api';
import { NgWebCompack } from 'ng-web-compack';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {

    // @ViewChild('sidePanel') sidePanel: NgWebCompack.SidePanel.SidePanelComponent;
    @ViewChild('sidePanel', { static: false }) sidePanel: NgWebCompack.SidePanel.SidePanelComponent;

    collectionPromise:  Promise<Array<any>>;
    private collection: Array<any>;
    private _accomplish: Function;

    constructor(

    ) {

        this.collectionPromise = new Promise(
            (accomplish: Function) => {
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

    onClick(event: EventTarget) {
        this.sidePanel.toggle();
    }

}
