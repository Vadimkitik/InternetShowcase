import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  @Input() user: User;
  public errorMsg;
  loaded: boolean = false;
  hide = true;
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  role = new FormControl('', [Validators.required]);

  
  constructor() { }

  ngOnInit() {
  }
  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessagePassw() {
    if (this.password.hasError('required')) {
      return 'Не оставлять пустым!';
    }
    return this.password.hasError('minlength') ? 'Пароль должен быть больше 5 символов' : '';
  }
  getErrorMessageRole() {
    if (this.role.hasError('required')) {
      return 'You must enter a value';
    }
  }
}
