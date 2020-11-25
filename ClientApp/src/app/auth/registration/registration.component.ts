import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';

import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/shared/services/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty && control.touched);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty && control.touched);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  user: User;
  matcher = new MyErrorStateMatcher();

    constructor(
        private router: Router,
        private authService: AuthService,
        private formBuilder: FormBuilder
  ) {}
  

  ngOnInit() {   
    this.form =new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'passwords': this.formBuilder.group(
        {
          password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
          confpassword: new FormControl(null)
        }, {validator: this.checkPasswords }),
      'name': new FormControl(null, Validators.required),
      'agree': new FormControl(null, Validators.required)
    });
    
  }


  onSubmit(){
    this.user =
    {
      name: this.form.value['name'],
      password: this.form.value['passwords']['password'],
      email: this.form.value['email']
    };

    this.authService.register(this.user).subscribe(data => {
      console.log(`Registered ${this.user.name}, Ok!`)
      this.router.navigate(['/auth/login']);
  }, error => console.log(error));
  }

  forbiddenEmails(control: FormControl) : Promise<any> {
    return new Promise((resolve, reject) => {
      // this.usersService.getUserByEmail(control.value)
      //   .subscribe((user: User) => {
      //     if(user) {
      //       resolve({forbiddenEmail: true})
      //     } else {
      //       resolve(null)
      //     }
      //   });
    })
  }

  getErrorMessageEmail() {
    if (this.form.get('email').hasError('required')) {
      return 'Не оставлять пустым!';
    }
    if(this.form.get('email').hasError('forbiddenEmail')){
      return 'Данный email уже зарегестрирован';
    }
    return this.form.get('email').hasError('email') ? 'Введите корректный email' : '';
  }

  getErrorMessagePassv() {
    if (this.form.get('passwords').get('password').hasError('required')) {
      return 'Не оставлять пустым!';
    }
    return this.form.get('passwords').get('password').hasError('minlength') ? 'Пароль должен быть больше 5 символов' : '';
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.confpassword.value;

  return pass === confirmPass ? null : { notSame: true }     
}  
}
