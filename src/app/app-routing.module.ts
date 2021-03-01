import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsyncSidePanelExampleComponent } from './components/async-side-panel/component';
import { MatcheckComponent } from './components/matcheck/component';


const routes: Routes = [
    {
        path: ''
        // trabalhando como uma home page
        , redirectTo: 'examples/async-side-panel'
        , pathMatch: 'full'
    }
    , {
        path: ''
        , children: [
            {
                path: 'examples'
                , children: [
                    // configurações vazias {} gerarão erro
                    {
                        path: 'async-side-panel'
                        , component: AsyncSidePanelExampleComponent
                    },
                    {
                        path: 'matcheck'
                        , component: MatcheckComponent
                    }
                ]
            }
        ]
    }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
