import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  @Input() user: User;
  loaded: boolean = false;
  hide = true;
  userName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);

  
  constructor() { }

  ngOnInit() {
  }
  getErrorMessageName() {
    if (this.userName.hasError('required')) {
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
}
