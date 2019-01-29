import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Services } from '../services/namespace';


@Component({
    selector: 'side-panel',
    templateUrl: './template.html',
    styleUrls: ['./style.sass']
})
export class SidePanelComponent implements OnInit, OnDestroy {

    private slideHorizontallyEventSubscription: Subscription;

    private _container: HTMLDivElement;
    private inlineStyle: CSSStyleDeclaration;

    private computedStyle: CSSStyleDeclaration;
    private computedWidth: string;
    private computedTransitionDuration: string;

    @ViewChild('container')
    private set container(value: ElementRef) {
        if (value) {
            this._container = value.nativeElement;

            this.computedStyle = window.getComputedStyle(this._container);
            this.computedWidth = this.computedStyle.width;
            this.computedTransitionDuration = this.computedStyle.transitionDuration;

            this.inlineStyle = this._container.style;
            this.inlineStyle.transitionDuration = '0ms';
            this.inlineStyle.width = '0px';
            this.inlineStyle.transitionDuration = this.computedTransitionDuration;
        }
    }

    constructor(
        private sidePanelService: Services.SidePanel
    ) {

    }

    ngOnInit() {
        this.slideHorizontallyEventSubscription = this.sidePanelService.subscribeInSlideHorizontallyEvent(
            () => {
                this.toggleHorizontalSliding();
            }
        );
    }

    ngOnDestroy() {
        this.slideHorizontallyEventSubscription.unsubscribe();
    }

    private toggleHorizontalSliding() {
        if (this.inlineStyle.width == '0px') {
            this.inlineStyle.width = this.computedWidth;
        } else {
            this.inlineStyle.width = '0px';
        }
    }

}
