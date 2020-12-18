import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/shared/models/user-role/user.model';
import { UserValidateService } from '../../../../shared/services/userValidate.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UserRoles } from 'src/app/shared/models/user-role/userRoles.model';
import { RolesService } from 'src/app/shared/services/roles.service';

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
  userRoles: Array<string> = [];
  allRoles: Array<string> = [];
  
  constructor(
      private usersService: UsersService,
      private router: Router,
      private toastrService: ToastrService,
      private userValidate: UserValidateService,
      private rolesService: RolesService
      ) { }

  ngOnInit(): void {
    this.rolesService.GetAllRoles().subscribe(res => {
      this.allRoles = res;
    })
    this.form = new FormGroup({
      'userName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  onToggle(event) {
    if (event.checked) {
      this.userRoles.push(event.value)
    }
    else {
      let index = this.userRoles.indexOf(event.value);
      if(index > -1) {
        this.userRoles.splice(index, 1);
      }    
    }
  }

  onSubmit() {
    this.user.roles = this.userRoles;
    console.log(this.user)
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
