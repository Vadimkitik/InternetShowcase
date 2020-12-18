import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  constructor(    
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    this.authService.login(this.form.value)
      .subscribe(data => {
        this.toastrService.success(`Loggin successful`);
        this.authService.saveToken(data["token"]);
        this.authService.saveUser(data["userName"], data["email"], data['userRoles']);
        this.router.navigate(['/admin-panel/products']);
      }, err => this.toastrService.error(err['error']));
  }

  getErrorMessageEmail() {
    if (this.form.get('email').hasError('required')) {
      return 'Не оставлять пустым!';
    }
    return this.form.get('email').hasError('email') ? 'Введите корректный email' : '';
  }

}
