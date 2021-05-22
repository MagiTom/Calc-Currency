import { Component, OnInit } from '@angular/core';
import { NbpService } from '../services/nbp.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  currencyInputValue:any;
  result:any;
  currencyType;

  constructor(private nbp:NbpService) {}

  ngOnInit(){
  this.calc();
  }

  calc(){
   this.nbp.getCurrency(this.currencyType).subscribe(result => {
     
    this.result = this.currencyInputValue * Object(result).rates[0].mid;
    })


  }





}
