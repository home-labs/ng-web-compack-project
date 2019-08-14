import {
    Component,
    ViewChild,
    // HostListener,
    ElementRef
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

    // private eventTarget: EventTarget;

    // private eventTargets: EventTarget[];

    private _containerElementRef: ElementRef;
    // ver se não dará problema com versões anteriores do Angular
    // @ViewChild('container')
    @ViewChild('container', { static: true })
    private set container(value: any) {
        if (value) {
            this._containerElementRef = value;
            this._container = this._containerElementRef.nativeElement;

            this.inlineStyle = this._container.style;
            this.inlineStyle.width = '0px';
        }
    }

    // @HostListener('document:click', ['$event.target'])
    // private onClick(eventTarget: EventTarget) {

    //     this.eventTarget = eventTarget;

    //     console.log('onClick');
    //     console.log(eventTarget);
    //     console.log('------------');

    //     if (
    //         (
    //             this.eventTargets.length
    //             && !this.eventTargets.includes(eventTarget)
    //         )

    //         // isSameNode = ===
    //         && !(eventTarget as Node).isSameNode(this._containerElementRef.nativeElement)
    //         && !this._containerElementRef.nativeElement.contains(eventTarget)
    //         && this.inlineStyle.width !== '0px'
    //     ) {
    //         this.recall();
    //     }

    // }

    constructor() {
        this.retracted = true;
        // this.eventTargets = [];
    }

    toggle() {
        if (this.retracted) {
            this.release();
        } else {
            this.recall();
        }
    }

    // é chamado antes de HostListener e este é o problema
    release() {
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

        this.retracted = false;
    }

    recall() {
        this.inlineStyle.width = '0px';
        this.retracted = true;
    }

    // private recordHandler() {

    //     if (
    //         this.eventTarget
    //         && !this.eventTargets.includes(this.eventTarget)
    //         // também pode ser testado se eventTarget não é a máscara
    //     ) {
    //         this.eventTargets.push(this.eventTarget);
    //     }

    //     // console.log(this.eventTargets);
    // }

}
