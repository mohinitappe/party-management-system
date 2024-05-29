import { Component } from '@angular/core';
import { PartyApiService } from './service/party-api.service';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.scss']
})
export class PartyListComponent {

  constructor(private partyService: PartyApiService){
  }

  ngOnInit(){
    this.partyService.getPartyList().subscribe(response => {
      console.log(response);
    })
  }
}

