import {
    Component
    , OnInit
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-matcheck',
    templateUrl: './template.html',
    styleUrls: ['./style.styl']
})
export class MatcheckExampleComponent {

    objectCollection: object[];

    filterText!: string;

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group(
            {
                ids: [null],
                name: [null],
            }
        );

        this.objectCollection = [
            {
                id: 1,
                name: 'Object Name 1'
            },
            {
                id: 2,
                name: 'Object Name 2'
            },
            {
                id: 3,
                name: 'Object Name 3'
            }
        ]
    }

    callbackDeclarationOfDisabledProperty(): boolean {
        return this.form.value.ids.length === 2;
    }

    showFormDataInLog() {
        console.log(this.form.value.ids);
    }

}
