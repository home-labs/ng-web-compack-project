import {
    Component
    , ViewChild
    , HostListener
    , ElementRef
    , Input
    , AfterContentChecked
} from '@angular/core';


@Component({
    selector: 'lib-side-panel',
    templateUrl: './template.html',
    styleUrls: ['./style.styl']
})
export class SidePanelComponent implements AfterContentChecked {

    @Input()
    private retracted!: boolean;

    private triggerElements: EventTarget[];

    private isAReleaseTriggerElement: boolean;

    private computedWidth!: string;

    private widthWasComputed: boolean;

    private inlineStyle!: CSSStyleDeclaration;

    private _container!: HTMLDivElement;

    private _containerElementRef!: ElementRef<HTMLDivElement>;

    @ViewChild('container', { static: true })
    private set container(value: any) {
        if (value) {
            this._containerElementRef = value;
            this._container = this._containerElementRef.nativeElement;

            this.inlineStyle = this._container.style;
        }
    }

    @HostListener('document:click', ['$event'])
    onHostClick(event: Event) {

        if (!this.retracted) {

            if (this.isAReleaseTriggerElement) {
                this.recordTriggerElement(event);
            }

            if (!this.triggerElements.includes(event.target!)
                && !this._containerElementRef.nativeElement.contains(event.target as Node)
            ) {
                this.recall();
            }

        }

    }

    constructor() {
        this.widthWasComputed = false;
        this.retracted = this.retracted || true;
        this.triggerElements = [];
        this.isAReleaseTriggerElement = false;
    }

    ngAfterContentChecked() {

        if ((!this.computedWidth || this.computedWidth === '0px') && !this.widthWasComputed) {

            this.setComputedWith();

            if (this.computedWidth !== '0px') {
                this.widthWasComputed = true;
            }

            if (this.retracted) {
                this.inlineStyle.width = '0px';
            } else {
                this.inlineStyle.width = this.computedWidth;
            }

        }

    }

    toggle() {
        if (this.retracted) {
            this.isAReleaseTriggerElement = true;
            this.release();
        } else {
            this.recall();
        }
    }

    private setComputedWith() {

        let containerParent: Node | null;

        let containerClone: HTMLElement;

        let computedStyle: CSSStyleDeclaration;

        let inlineStyle: CSSStyleDeclaration;

        containerClone = this._container.cloneNode(true) as HTMLElement;

        inlineStyle = containerClone.style;
        inlineStyle.visibility = 'hidden';

        containerParent = this._container.parentElement;
        computedStyle = window.getComputedStyle(containerClone);

        if (containerParent) {
            containerParent.appendChild(containerClone);
            inlineStyle.width = '';

            this.computedWidth = computedStyle.width;

            containerParent.removeChild(containerClone);
        } else {
            this.computedWidth = `${window.document.documentElement.offsetWidth}px`;
        }

    }

    private release() {
        this.inlineStyle.width = this.computedWidth;
        this.retracted = false;
    }

    private recall() {
        this.inlineStyle.width = '0px';
        this.retracted = true;
    }

    private recordTriggerElement(event: Event) {

        const eventTarget: EventTarget = event.target!;

        if (eventTarget && !this.triggerElements.includes(eventTarget)) {
            this.triggerElements.push(eventTarget);
        }

        this.isAReleaseTriggerElement = false;
    }

}
