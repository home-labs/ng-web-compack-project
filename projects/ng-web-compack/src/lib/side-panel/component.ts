import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    HostListener
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

    private targetNode: Node;

    private handlers: EventTarget[];

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

    @HostListener('document:click', ['$event.target'])
    onClick(targetNode: Node) {

        this.targetNode = targetNode;

        if (
            (
                this.handlers.length
                && this.handlers.indexOf(targetNode) === -1
            )

            // isSameNode = ===
            && !targetNode.isSameNode(this._containerElementRef.nativeElement)
            && !this._containerElementRef.nativeElement.contains(targetNode)

            && this.inlineStyle.width !== '0px'
        ) {
            this.retract();
        }

    }

    constructor(
        private sidePanelService: Services.SidePanel
    ) {
        this.request2Sliding = new EventEmitter();

        this.handlers = [];
    }

    ngOnInit() {
        this.sidePanelService.subscribe(
            (targetNode: EventTarget) => {
                this.request2Sliding.emit();
                this.recordHandler(targetNode);
            }, this.identifier
        );

        this.sidePanelService.subscribeOnRequisitors2Sliding(
            () => {
                // estava sendo chamado antes do onClick, f*** com tudo.
                // this.recordHandler(this.targetNode);

                this.expand();
            }
        );
    }

    ngOnDestroy() {
        this.sidePanelService.unsubscribe(this.identifier);
    }

    private recordHandler(targetNode: EventTarget) {
        if (targetNode && this.handlers.indexOf(targetNode) === -1) {
            this.handlers.push(targetNode);
        }
    }

    private expand() {
        let
            containerParent: Node,
            containerClone: HTMLElement,
            computedStyle: CSSStyleDeclaration,
            inlineStyle: CSSStyleDeclaration,
            computedWidth: string
        ;

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
