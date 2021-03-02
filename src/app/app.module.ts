import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AsyncSidePanelExampleModule  } from './components/async-side-panel/module';

import { AppComponent } from './app.component';
import { HorizontalMenuComponent } from './core/components/index';
// import { HorizontalMenuComponent } from './core/components/horizontal-menu/component';


@NgModule({
    imports: [
        CommonModule
        , BrowserModule
        , AppRoutingModule
        , AsyncSidePanelExampleModule
    ],
    declarations: [
        AppComponent
        , HorizontalMenuComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
