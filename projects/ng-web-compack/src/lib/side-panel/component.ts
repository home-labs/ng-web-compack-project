import {
    Component,
    ViewChild,
    ElementRef,
    HostListener
} from '@angular/core';


@Component({
    selector: 'lib-side-panel',
    templateUrl: './template.html',
    styleUrls: ['./style.sass']
})
export class SidePanelComponent {

    private retracted: Boolean;

    private _container: HTMLDivElement;

    private inlineStyle: CSSStyleDeclaration;

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
            this.retracted = true;
        }

    }

    constructor() {
        this.retracted = true;

        this.handlers = [];
    }

    toggle(targetNode: EventTarget) {
        this.recordHandler(targetNode);

        if (this.retracted) {
            this.expand();
        } else {
            this.retract();
        }

        this.retracted = !this.retracted;
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
