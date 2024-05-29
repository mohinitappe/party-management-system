import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PartyApiService {
  baseUrl = environment.serverUrl
  token = '5d385d51221563c6f06bb07bbfc662f1bf3a103c';

  constructor(private http : HttpClient) { }

  getPartyList(){
    // const headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
    let headers = new HttpHeaders({
      'Authorization': `Token ${this.token}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    });
    return this.http.get(`${this.baseUrl}/party`, { headers });
  }
}
