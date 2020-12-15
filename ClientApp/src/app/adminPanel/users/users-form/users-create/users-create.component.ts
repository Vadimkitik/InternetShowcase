import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent {

  @Input() user: User = new User();    // добавляемый объект
  
  loaded: boolean = false;
  hide = true;
  userName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  
  constructor(
      private usersService: UsersService,
      private router: Router,
      private toastrService: ToastrService
      ) { }

  save() {
    this.usersService.createUser(this.user).subscribe(() => {
      this.toastrService.success(`User ${this.user.userName} is Created`);
      this.router.navigateByUrl("/admin-panel/users")
    });
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
