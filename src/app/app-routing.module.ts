import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: ()=> import('../app/signin/signin.module').then(m => m.SigninModule)},
  {path: 'party', loadChildren: ()=> import('../app/modules/party/party.module').then(m => m.PartyModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
