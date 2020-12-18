import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserValidateService } from 'src/app/shared/services/userValidate.service';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email= new FormControl(null, [Validators.required, Validators.email]);
  constructor(    
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService,
    private userValidate: UserValidateService
  ) { }

  ngOnInit() {
      
  }

  onSubmit() {
    this.authService.login(this.email.value)
      .subscribe(data => {
        this.toastrService.success(`Check your email ${this.email.value}`);
        //this.router.navigate(['/auth/login']);
      }, err => this.toastrService.error(err['error']));
  }

  getErrorMessageEmail() {
    return this.userValidate.getErrorMessageEmail(this.email);
}

}
