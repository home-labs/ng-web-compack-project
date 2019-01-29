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
        if (this.inlineStyle.width == '0px') {
            this.inlineStyle.width = this.computedWidth;
        } else {
            this.inlineStyle.width = '0px';
        }
    }

}
