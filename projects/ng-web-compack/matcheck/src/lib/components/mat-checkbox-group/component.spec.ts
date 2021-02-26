import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCheckboxGroupComponent } from './component';

describe('MatCheckboxGroupComponent', () => {
    let component: MatCheckboxGroupComponent;
    let fixture: ComponentFixture<MatCheckboxGroupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MatCheckboxGroupComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MatCheckboxGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
