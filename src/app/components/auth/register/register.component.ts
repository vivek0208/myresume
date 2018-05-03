import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.signupForm = this.formBuilder.group({
      'firstName': ['',
        [Validators.required, Validators.maxLength(50)]
      ],
      'lastName': ['',
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
    this.authService.register(this.signupForm.value);
  }

}
