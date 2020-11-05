import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
    constructor(
        private router: Router,
        private usersService: UsersService
  ) {}
  

  ngOnInit() {   
    this.form =new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'passwords': new FormGroup({
        'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'confpassword': new FormControl(null, [Validators.required])
       }, this.passwordsAreEqual()),
      'name': new FormControl(null, Validators.required),
      'agree': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    const { email, password, name, role} = this.form.value;
    const user = new User
    (
      email, 
      this.form.value['passwords']['password'], 
      name,  
      "User"
    );

      this.usersService.createUser(user)
      .subscribe((user: User) => {
        this.router.navigate(['/auth/login'], {
          queryParams: {
            nowCanLoggin: true
          }
        });
   });
  }

  forbiddenEmails(control: FormControl) : Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if(user) {
            resolve({forbiddenEmail: true})
          } else {
            resolve(null)
          }
        })
    })
  }

  private passwordsAreEqual(): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      if (!(group.dirty || group.touched) || group.get('password').value === group.get('confpassword').value) {
        return null;
      }
      return {
        custom: 'Passwords are not equal.'
      };
    };
  }
  
}
