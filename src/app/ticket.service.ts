import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  _url = 'https://www.golfamsafar.com/AJ_ticket_search/';
  _headers = {
    'accept':'application/json',
    'accept-language':'en-GB,en;q=0.9,en-US;q=0.8,fa;q=0.7',
    'cache-control':'no-cache',
    'Content-Type':'application/x-www-form-urlencoded',
    'pragma':'no-cache',
    'sec-fetch-dest':'empty',
    'sec-fetch-mode':'cors',
    'sec-fetch-site':'same-origin',
    'x-requested-with':'XMLHttpRequest'
  }
  header = new HttpHeaders(this._headers);
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  constructor(private _http:HttpClient ) { }

  ticketDomPost(ticketData) : Observable<any> {
  console.log(this._headers)
    return this._http.post<any>(this.proxyurl+this._url,ticketData,{headers:this._headers})
  }
}
