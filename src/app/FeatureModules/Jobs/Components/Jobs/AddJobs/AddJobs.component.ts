import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-AddJobs',
  templateUrl: './AddJobs.component.html',
  styleUrls: ['./AddJobs.component.scss']
})
export class AddJobsComponent implements OnInit {
  addJobsForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.addJobsForm = fb.group({
      'ownerName':[''],
      'address1':[''],
      'address2':[''],
      'address3':[''],
      'suburb':[''],
      'state':[''],
      'postCode':[''],
      'description':[''],
      'pageNo':[''],
      'employee':[''],
      'completedDate':[''],
      'status':[''],
      'dateTankInstalled':[''],
      'letterSend':[''],
    })
   }

  ngOnInit() {
    
  }

 onSubmit(){
   console.log(this.addJobsForm);
 }

}
