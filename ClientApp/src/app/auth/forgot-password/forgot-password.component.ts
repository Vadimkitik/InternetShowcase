import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForgotUserPassword } from 'src/app/shared/models/auth/forgotUserPassword.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserValidateService } from 'src/app/shared/services/userValidate.service';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotUserPassword: ForgotUserPassword;
  email = new FormControl(null, [Validators.required, Validators.email]);
  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private userValidate: UserValidateService,
    private authService: AuthService
  ) { }

  ngOnInit() {}

  onSubmit() {
    this.forgotUserPassword = {
      email: this.email.value
    };

    this.authService.forgotPassword(this.forgotUserPassword).subscribe(data => {
      this.toastrService.success(`Для сброса пароля перейдите по ссылке в письме,
         отправленном на ваш Email ${this.email.value}`);
      //this.router.navigate(['/auth/login']);
    }, err => this.toastrService.error(err['error']));
  }

  getErrorMessageEmail() {
    return this.userValidate.getErrorMessageEmail(this.email);
  }

}
