import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  currencyInputValue:any;
  result:any;

  constructor(private http:HttpClient) {}

  ngOnInit(){
    this.getCurrency();
  }

  calc(){
  this.result = this.currencyInputValue;
  }

  getCurrency(){
    this.http.get<any>(`http://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json`).subscribe(data => {
     
    console.log(data)
    })
  }



}
