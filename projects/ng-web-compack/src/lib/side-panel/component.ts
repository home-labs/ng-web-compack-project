import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef,
    Output,
    EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Services } from '../services/namespace';


@Component({
    selector: 'side-panel',
    templateUrl: './template.html',
    styleUrls: ['./style.sass']
})
export class SidePanelComponent implements OnInit, OnDestroy {

    private require2SlideSubscription: Subscription;
    private slideHorizontallyEventSubscription: Subscription;

    private _container: HTMLDivElement;
    private inlineStyle: CSSStyleDeclaration;

    @ViewChild('container')
    private set container(value: ElementRef) {
        if (value) {
            this._container = value.nativeElement;

            this.inlineStyle = this._container.style;
            this.inlineStyle.width = '0px';
        }
    }

    @Output() require2Slide: EventEmitter<null>;

    constructor(
        private sidePanelService: Services.SidePanel
    ) {
        this.require2Slide = new EventEmitter();
    }

    ngOnInit() {
        this.require2SlideSubscription = this.sidePanelService.subscribeInSlideRequestEvent(
            () => {
                this.require2Slide.emit();
            }
        );

        this.slideHorizontallyEventSubscription = this.sidePanelService.subscribeInSlideHorizontallyEvent(
            () => {
                this.toggleHorizontalSliding();
            }
        );
    }

    ngOnDestroy() {
        this.require2SlideSubscription.unsubscribe();
        this.slideHorizontallyEventSubscription.unsubscribe();
    }

    private toggleHorizontalSliding() {
        let
            containerParent: Node,
            containerClone,
            computedStyle: CSSStyleDeclaration,
            inlineStyle: CSSStyleDeclaration,
            computedWidth: string;

        if (this.inlineStyle.width == '0px') {
            containerParent = this._container.parentElement;
            containerClone = this._container.cloneNode(true);
            computedStyle = window.getComputedStyle(containerClone);
            inlineStyle = containerClone.style;
            inlineStyle.visibility = "hidden";

            containerParent.appendChild(containerClone);

            inlineStyle.width = "";
            computedWidth = computedStyle.width;
            this.inlineStyle.width = computedWidth;

            containerParent.removeChild(containerClone);
        } else {
            this.inlineStyle.width = '0px';
        }
    }

}
