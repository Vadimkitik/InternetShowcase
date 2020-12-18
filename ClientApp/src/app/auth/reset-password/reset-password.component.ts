import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserValidateService } from 'src/app/shared/services/userValidate.service';
import { ResetUserPassword } from 'src/app/shared/models/auth/resetUserPassword.model';
import { MyErrorStateMatcher } from '../registration/registration.component';
import { group } from '@angular/animations';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;
  code: string;
  resetUserPassword: ResetUserPassword;
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private userValidate: UserValidateService
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'passwords': this.formBuilder.group(
        {
          password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
          confpassword: new FormControl(null)
        }, { validator: this.checkPasswords })
    });
  }

  onSubmit() {
    this.resetUserPassword =
    {
      confirmPassword: this.form.value['passwords']['confpassword'],
      password: this.form.value['passwords']['password'],
      email: this.form.value['email']
    };
    
    //.subscribe(data => {
      console.log(this.resetUserPassword)
      this.toastrService.success(`Ваш пароль сброшен.`);
      this.router.navigate(['/auth/login']);
    //});
  }

  getErrorMessageEmail() {
    return this.userValidate.getErrorMessageEmail(this.form.get('email'));
  }

  getErrorMessagePassw() {
    return this.userValidate.getErrorMessagePassw(this.form.get('passwords').get('password'));
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }
}
