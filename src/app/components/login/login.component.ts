import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpHandlerService } from 'src/app/service/http-handler.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private handler: HttpHandlerService,
              private router: Router
              ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  public onSubmit(user) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.handler.login(user).subscribe(res => {
      console.log('res::', res);
      localStorage.setItem('token', res.headers.get('token'));
      this.router.navigate(['/dashboard']);
    },  (error) => console.error(error));
  }
}


