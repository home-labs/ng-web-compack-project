import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWebCompackComponent } from './ng-web-compack.component';

describe('NgWebCompackComponent', () => {
  let component: NgWebCompackComponent;
  let fixture: ComponentFixture<NgWebCompackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgWebCompackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWebCompackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
