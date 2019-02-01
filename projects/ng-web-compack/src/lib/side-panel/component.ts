import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef,
    Output,
    EventEmitter
} from '@angular/core';
import {
    Subscription
} from 'rxjs';

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

    private _containerElementRef: ElementRef;
    @ViewChild('container')
    private set container(value: any) {
        if (value) {
            this._containerElementRef = value;
            this._container = this._containerElementRef.nativeElement;

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

        // this.sidePanelService.subscribeInSlideRequestEvent(
        //     () => {
        //         console.log('called only here');
        //     }
        // );

        this.slideHorizontallyEventSubscription = this.sidePanelService.subscribeInSlideHorizontallyEvent(
            () => {
                if (this.inlineStyle.width == '0px') {
                    this.expand();
                } else {
                    this.retract();
                }
            }
        );
    }

    ngOnDestroy() {
        this.require2SlideSubscription.unsubscribe();
        this.slideHorizontallyEventSubscription.unsubscribe();
    }

    private expand() {
        let
            containerParent: Node,
            containerClone: HTMLElement,
            computedStyle: CSSStyleDeclaration,
            inlineStyle: CSSStyleDeclaration,
            computedWidth: string;

        containerClone = this._container.cloneNode(true) as HTMLElement;
        containerParent = this._container.parentElement;

        computedStyle = window.getComputedStyle(containerClone);

        inlineStyle = containerClone.style;
        inlineStyle.visibility = "hidden";

        if (containerParent) {
            containerParent.appendChild(containerClone);
            inlineStyle.width = "";
            computedWidth = computedStyle.width;
            containerParent.removeChild(containerClone);
        } else {
            computedWidth = `${window.document.documentElement.offsetWidth}px`;
        }

        this.inlineStyle.width = computedWidth;
    }

    private retract() {
        this.inlineStyle.width = '0px';
    }

}
