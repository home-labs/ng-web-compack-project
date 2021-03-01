import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { MatcheckComponent } from './matcheck/component';

import { AsyncSidePanelExampleComponent } from './components/async-side-panel/component';


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
