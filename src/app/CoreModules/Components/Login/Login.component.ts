import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!:FormGroup ;
  constructor(private fb :FormBuilder, private router:Router){}

  ngOnInit(){
    this.loginForm = this.fb.group({
        'username':[''],
        'password':['']
    })
  }

  onLogin(){
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    this.router.navigate(["customer"]);
  }

  


}
