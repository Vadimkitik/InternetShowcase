
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  name: string;
  isLoggedIn: boolean = false;
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
  
  onSubmit() {
    this.authService.login(this.form.value)
      .subscribe(data => {
        this.toastrService.success(`Loggin successful`);
        this.authService.saveToken(data["token"]);
        this.authService.saveUser(data["userName"], data["email"]);
        this.router.navigate(['/admin-panel/product']);
      }, err => this.toastrService.error(err['error']));
  }

  getErrorMessageEmail() {
    if (this.form.get('email').hasError('required')) {
      return 'Не оставлять пустым!';
    }
    return this.form.get('email').hasError('email') ? 'Введите корректный email' : '';
  }

  getErrorMessagePassv() {
    if (this.form.get('password').hasError('required')) {
      return 'Не оставлять пустым!';
    }
    return this.form.get('password').hasError('minlength') ? 'Пароль должен быть больше 5 символов' : '';
  }
}
