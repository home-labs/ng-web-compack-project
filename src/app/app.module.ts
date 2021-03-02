import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HorizontalMenuComponent } from './core/components/index';
import { MatcheckExampleModule } from './components/matcheck/module';
import { AsyncSidePanelExampleModule  } from './components/async-side-panel/module';
// import { HorizontalMenuComponent } from './core/components/horizontal-menu/component';


@NgModule({
    imports: [
        AppRoutingModule
        , AsyncSidePanelExampleModule
        , MatcheckExampleModule
    ],
    declarations: [
        AppComponent
        , HorizontalMenuComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
