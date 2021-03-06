import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { AsyncSidePanelExampleComponent } from './components/examples/async-side-panel/component';
import { MatcheckExampleComponent } from './components/examples/matcheck/component';


const routes: Routes = [
    {
        path: ''
        // trabalhando como uma home page
        , redirectTo: 'examples/async-side-panel'
        , pathMatch: 'full'
    }
    , {
        path: 'examples'
        , children: [
            // objetos literais vazios ({}) gerarão erro
            {
                path: 'async-side-panel'
                , component: AsyncSidePanelExampleComponent
            },
            {
                path: 'matcheck'
                , component: MatcheckExampleComponent
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
