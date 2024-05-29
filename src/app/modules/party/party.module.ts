import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { PartyListComponent } from './party-list.component';


@NgModule({
  declarations: [
    PartyListComponent
  ],
  imports: [
    CommonModule,
    PartyRoutingModule
  ]
})
export class PartyModule { }
