import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef
} from '@angular/core';

import { Services } from '../services/namespace';


@Component({
    selector: 'lib-side-panel',
    templateUrl: './template.html',
    styleUrls: ['./style.sass']
})
export class SidePanelComponent implements OnInit, OnDestroy {

    @Input() identifier: any;

    @Output() request2Sliding: EventEmitter<null>;

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

    constructor(
        private sidePanelService: Services.SidePanel
    ) {
        this.request2Sliding = new EventEmitter();
    }

    ngOnInit() {
        this.sidePanelService.subscribe(
            () => {
                this.request2Sliding.emit();
            }, this.identifier
        );

        this.sidePanelService.subscribeOnRequisitors2Sliding(
            () => {
                this.horizontallySLideToggle();
            }
        );
    }

    ngOnDestroy() {
        this.sidePanelService.unsubscribe(this.identifier);
    }

    private horizontallySLideToggle() {
        if (this.inlineStyle.width === '0px') {
            this.expand();
        } else {
            this.retract();
        }
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
        inlineStyle.visibility = 'hidden';

        if (containerParent) {
            containerParent.appendChild(containerClone);
            inlineStyle.width = '';
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
