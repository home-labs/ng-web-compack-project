import {
    Component ,
    ViewChild
} from '@angular/core';

import {
    NgWebCompack
} from 'projects/ng-web-compack/src/public_api';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    @ViewChild('sidePanel') sidePanel: NgWebCompack.Components.SidePanelComponent;

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
                }, 5000
            );
    }

    onClick(event: Event) {
        this.sidePanel.toggle(event.target);
    }

}
