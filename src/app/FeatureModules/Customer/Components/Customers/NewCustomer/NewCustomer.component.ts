import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-NewCustomer',
  templateUrl: './NewCustomer.component.html',
  styleUrls: ['./NewCustomer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor() { }

  data={
    address1: "abcd",
    suburb: "Hydrogen", 
    state: 1.0079, 
    postcode: 'H',
    status:0
  };
  ngOnInit() {
   localStorage.setItem('GlobalData',JSON.stringify(this.data));
  
  }



  testData(){

  }
  

}
