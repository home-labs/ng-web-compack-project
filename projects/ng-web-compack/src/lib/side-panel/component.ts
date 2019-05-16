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

    private handlers: Node[];

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

        console.log('onClick');
        console.log(targetNode);

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
            () => {
                this.request2Sliding.emit();
            }, this.identifier
        );

        this.sidePanelService.subscribeOnRequisitors2Sliding(
            () => {
                // está sendo chamado antes do onClick, fudendo com tudo. Mas por quê?
                this.recordHandler();
                this.expand();
            }
        );
    }

    ngOnDestroy() {
        this.sidePanelService.unsubscribe(this.identifier);
    }

    private recordHandler() {
        console.log('recording');
        console.log(this.targetNode);

        if (this.targetNode && this.handlers.indexOf(this.targetNode) === -1) {
            this.handlers.push(this.targetNode);
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
