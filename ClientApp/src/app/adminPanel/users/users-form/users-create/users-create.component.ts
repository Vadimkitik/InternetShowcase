import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/shared/models/user.model';
import { UserValidateService } from '../userValidate.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  @Input() user: User = new User();  
  loaded: boolean = false;
  hide = true;
  form: FormGroup;
  
  constructor(
      private usersService: UsersService,
      private router: Router,
      private toastrService: ToastrService,
      private userValidate: UserValidateService
      ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'userName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  onSubmit() {
    this.usersService.createUser(this.user).subscribe(() => {
      this.toastrService.success(`User ${this.user.userName} is Created`);
      this.router.navigateByUrl("/admin-panel/users")
    });
  }

  getErrorMessageName() {
    return this.userValidate.getErrorMessageName(this.form.get('userName'));
  }

  getErrorMessageEmail() {
    return this.userValidate.getErrorMessageEmail(this.form.get('email'));
  }

  getErrorMessagePassw() {
    return this.userValidate.getErrorMessagePassw(this.form.get('password'));
  }
}
