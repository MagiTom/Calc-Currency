import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NbpService {

  constructor(private http:HttpClient) { }




  getCurrency(currency){
   return this.http.get<any>(`http://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json/`)
  }
}
