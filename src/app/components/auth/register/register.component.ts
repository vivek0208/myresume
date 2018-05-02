import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm : FormGroup;

  constructor(private formBuilder : FormBuilder ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.signupForm = this.formBuilder.group({
      'firstname': ['',
      [Validators.required, Validators.maxLength(50)]
      ],
      'lastname': ['',
      [Validators.required]
      ],
      'email': ['',
      [Validators.required]
      ],
      'password': ['',
      [Validators.required]
      ],
      'confirmpassword': ['',
      [Validators.required]
      ]
    });
  }

  submit(): void {
     console.log(this.signupForm.value);
    // const loginData = {
    //   email : this.loginForm.value.username,
    //   password : this.loginForm.value.password
    // };
    // this.authService.signin(loginData);
  }

}
