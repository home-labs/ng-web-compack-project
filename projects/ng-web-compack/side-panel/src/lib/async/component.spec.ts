import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncComponent } from './component';

describe('SidePanelComponent', () => {
    let component: AsyncComponent;
    let fixture: ComponentFixture<AsyncComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AsyncComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AsyncComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
