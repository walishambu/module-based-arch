import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliamsDetailsComponent } from './components/cliams-details/cliams-details.component';
import { CliamsSearchComponent } from './components/cliams-search/cliams-search.component';
import { ClaimsComponent } from './components/claims/claims.component';

const routes: Routes = [
  {
    path: '',
    component:ClaimsComponent,
    children:[
      {
        path: 'claims-search',
        component:CliamsSearchComponent
      },
      {
        path: 'claims-details',
        component:CliamsDetailsComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsRoutingModule { }
