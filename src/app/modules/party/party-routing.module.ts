import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyListComponent } from './party-list.component';

const routes: Routes = [
  { path: '', component: PartyListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyRoutingModule { }
