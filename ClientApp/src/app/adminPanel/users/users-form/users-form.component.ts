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
  email = new FormControl('', [Validators.required, Validators.email]);

  
  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
