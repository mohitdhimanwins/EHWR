import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {

    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {

  }

  onLogin() {
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    this.router.navigate(["jobs"]);
  }




}
