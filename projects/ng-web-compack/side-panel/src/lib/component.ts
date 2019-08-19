import {
    Component,
    ViewChild,
    HostListener,
    Input,
    ElementRef,
    OnInit
} from '@angular/core';


@Component({
    selector: 'lib-side-panel',
    templateUrl: './template.html',
    styleUrls: ['./style.styl']
})
export class SidePanelComponent implements OnInit {

    @Input() private triggerElements: Element[];

    @Input() private retracted: Boolean;

    private _container: HTMLDivElement;

    private inlineStyle: CSSStyleDeclaration;

    // private eventTarget: EventTarget;

    private _containerElementRef: ElementRef;
    @ViewChild('container', { static: true })
    private set container(value: any) {
        if (value) {
            this._containerElementRef = value;
            this._container = this._containerElementRef.nativeElement;

            this.inlineStyle = this._container.style;
            this.inlineStyle.width = '0px';
        }
    }

    @HostListener('document:click', ['$event.target'])
    onClick(eventTarget: EventTarget) {

        if (
            !this._containerElementRef.nativeElement.contains(eventTarget)
            && !this.retracted
            && !this.triggerElements.includes(eventTarget as Element)
        ) {
            this.recall();
        }

    }

    constructor() {
        this.retracted = true;
        this.triggerElements = [];
    }

    ngOnInit() {
        if (!this.triggerElements.length) {
            throw new Error(`The input property "triggerElements" was not defined.`);
        }
    }

    toggle() {
        if (this.retracted) {
            this.release();
        } else {
            this.recall();
        }
    }

    // em relação a gravar por aqui o eventTarget em um array, o proeblema é que aqui é chamado antes de HostListener, isto é um problema porque se for dado um click fora de um elemento trigger, o evento disparado guardado em HostListener guardará na propriedade eventTarget este elemento que disparou o evento do tipo click, e quando o método release for chamado ele terá como referência um elemento já obsoleto (e poderá ser um elemento não trigger) guardado em eventTarget porque o evento em HostListener disparado ainda não terá sido chamado, desta vez por um elemento trigger.
    private release() {
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

    private recall() {
        this.inlineStyle.width = '0px';
        this.retracted = true;
    }

}
