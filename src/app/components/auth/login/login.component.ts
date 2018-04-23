import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user = {
    username: '',
    password: ''
  };
  constructor(private formBuilder: FormBuilder,
  private authService: AuthService ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      'username': [this.user.username,
      [Validators.required, Validators.maxLength(50)]
      ],
      'password': [this.user.password,
      [Validators.required]
      ]
    });
  }

  submitLogin(): void {
    // console.log(this.loginForm.value);
    const loginData = {
      email : this.loginForm.value.username,
      password : this.loginForm.value.password
    };
    this.authService.signin(loginData);
  }

  googleLogin(): void {
    this.authService.googleLogin();
  }

  facebookLogin(): void {
    this.authService.facebookLogin();
  }
}
