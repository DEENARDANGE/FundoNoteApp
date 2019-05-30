import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UtilService } from 'src/app/service/util.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  hide = true;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private userService: UserService,
              private httpUtil: UtilService, private snackBar: MatSnackBar) {

  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(user) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.userService.login(user).subscribe(response => {
      localStorage.setItem('token', response.headers.get('token'));
      this.router.navigate(['/dashboard/main-notes']);
      this.snackBar.open('Successfully logged In', 'Ok', { duration: 2000 });
    }, error => {
      this.snackBar.open('error', 'please enter valid data', { duration: 2000 });
    });
  }
}
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UtilService } from 'src/app/service/util.service';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })

// export class LoginComponent implements OnInit {

//   loginForm: FormGroup;
//   submitted = false;
//   returnUrl: string;
//   hide = true;

//   constructor(private formBuilder: FormBuilder,
//               private handler: UtilService,
//               private router: Router
//               ) {

//   }

//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   get f() { return this.loginForm.controls; }

//   public onSubmit(user) {
//     this.submitted = true;
//     if (this.loginForm.invalid) {
//       return;
//     }
//     this.handler.login(user).subscribe(res => {
//       console.log('res::', res);
//       localStorage.setItem('token', res.headers.get('token'));
//       if (localStorage.getItem('token') != null) {
//       this.router.navigate(['/dashboard']);
//       }
//     },  (error) => console.error(error));

//   }
// }


