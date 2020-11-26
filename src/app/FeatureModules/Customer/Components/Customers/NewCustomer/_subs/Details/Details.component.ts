import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Details',
  templateUrl: './Details.component.html',
  styleUrls: ['./Details.component.scss']
})
export class DetailsComponent implements OnInit {
  public detailsForm: FormGroup;
  suburb :any =['select1','select2'];
  state: any =['select1','select2'];

  constructor(private fb: FormBuilder) {

    this.detailsForm = this.fb.group({
      customerName: [''],
      accountBal: [''],
      suburb:[''],
      address: this.fb.group({
         address1:[''],
         address2:[''],
         address3:[''],
         postCode:['']
      }),
    });
   
   }

 
  ngOnInit() {
  }

  onSubmit(){
     let data = this.detailsForm.value;
     console.log(this.detailsForm);
  }

}
