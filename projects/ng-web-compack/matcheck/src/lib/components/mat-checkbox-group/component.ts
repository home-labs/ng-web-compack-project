import {
    Component
    , OnInit
    , Input
    , AfterContentChecked
    , AfterViewChecked
    , ViewContainerRef
    , ChangeDetectorRef
} from '@angular/core';
import {
    FormControl
    // , NgForm
    , FormGroup
    , Validators
} from '@angular/forms';
import {
    MatCheckboxChange
    , MatCheckbox
} from '@angular/material/checkbox';


@Component({
    selector: 'lib-mat-checkbox-group',
    templateUrl: './template.html',
    styleUrls: [
        './style.styl'
    ]
})
export class MatCheckboxGroupComponent<T>
    implements
        OnInit,
        AfterContentChecked,
        AfterViewChecked {

    @Input() parent!: ThisType<T>;

    @Input() filterTerm!: string;

    @Input() objectCollection!: object[];

    @Input() property!: string;

    @Input() propertyLabel!: string;

    // @Input() form: FormGroup | NgForm;
    @Input() form!: FormGroup;

    @Input() formProperty!: string;

    @Input() callbackDeclarationOfDisabledProperty!: ((matCheckbox: MatCheckbox) => boolean);

    @Input() ngClass!: any;

    private primaryKeyValues: string[];

    constructor(
        private viewContainerRef: ViewContainerRef,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.primaryKeyValues = [];
    }

    ngOnInit() {

        if (!this.propertyLabel) {
            this.propertyLabel = this.property;
        }

        if ((!this.property || !this.formProperty) && (this.property !== this.formProperty)) {
            if (this.formProperty) {
                this.property = this.formProperty;
            } else {
                this.formProperty = this.property;
            }
        }

        if (this.form.value[this.formProperty]
            && typeof this.form.value[this.formProperty] === 'object'
            && this.form.value[this.formProperty] instanceof Array
        ) {
            this.primaryKeyValues = this.normalizedCheckedValues(this.form.value[this.formProperty]);
        } else {
            this.resolveFormControl();
        }

        this.updateFormValue();
    }

    ngAfterContentChecked() {
        this.primaryKeyValues = this.form.value[this.formProperty] || [];
        this.changeDetectorRef.detectChanges();
    }

    ngAfterViewChecked() {
        this.changeDetectorRef.detectChanges();
    }

    renderLabelOf(item: object): string {
        return (item as any)[this.propertyLabel];
    }

    renderValueOf(item: object): string {
        return (item as any)[this.property];
    }

    resolveFormValue(event: MatCheckboxChange) {
        if (event.source.checked) {
            this.addValue(event.source.value);
        } else {
            this.deleteValue(event.source.value);
        }
    }

    isDisabled(matCheckbox: MatCheckbox): boolean {
        if (this.callbackDeclarationOfDisabledProperty && typeof this.callbackDeclarationOfDisabledProperty === 'function') {
            if (this.parent) {
                return this.callbackDeclarationOfDisabledProperty.apply(this.parent, [matCheckbox])
                    && !matCheckbox.checked;
            }

            return this.callbackDeclarationOfDisabledProperty
                .apply((this.viewContainerRef as any)['_view'].component, [matCheckbox])
                && !matCheckbox.checked;
        }

        return false;
    }

    isChecked(matCheckbox: MatCheckbox): boolean {

        let value: string = matCheckbox.value;

        if (value) {
            if (typeof value === 'number') {
                value = `${value}`;
            }
        } else {
            return false;
        }

        return this.primaryKeyValues.includes(value);
    }

    private resolveFormControl() {
        if (this.form instanceof FormGroup) {
            this.form.addControl(this.formProperty, new FormControl([], Validators.required));
        } else {
            // add NgForm logic
        }
    }

    private normalizedCheckedValues(formPropertyValues: any[]): any[] {
        return formPropertyValues.map(
            (value: any) => {
                if (value) {
                    if (typeof value === 'number') {
                        value = `${value}`;
                    }

                    return value;
                }
            }
        );
    }

    private addValue(value: string) {
        if (value) {
            if (typeof value === 'number') {
                value = `${value}`;
            }

            if (!this.primaryKeyValues.includes(value)) {
                this.primaryKeyValues.push(value);
            }
        }

        this.updateFormValue();
    }

    private deleteValue(value: string) {
        if (value) {
            if (typeof value === 'number') {
                value = `${value}`;
            }
        }

        const index: number = this.primaryKeyValues.indexOf(value);

        if (index !== -1) {
            this.primaryKeyValues.splice(index, 1);
        }

        this.updateFormValue();
    }

    private updateFormValue() {
        this.form.controls[this.formProperty].setValue(this.primaryKeyValues);
    }

}
