import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/models/user-role/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { UserValidateService } from 'src/app/shared/services/userValidate.service';

@Component({
  selector: 'user-resetpassword',
  templateUrl: './user-resetpassword.component.html',
  styleUrls: ['./user-resetpassword.component.css']
})
export class UserResetpasswordComponent implements OnInit {

  emailLine: string;
  loaded: boolean = false;
  user: User;
  form: FormGroup;

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private userValidate: UserValidateService,
    private activeRoute: ActivatedRoute,
    private userService: UsersService
  ) {
    this.emailLine = activeRoute.snapshot.params["email"];
  }

  ngOnInit(): void {
    if (this.emailLine) {
      this.userService.getUserByEmail(this.emailLine)
        .subscribe((data: User) => {
          this.user = data;
          if (this.user != null) {
            this.form = new FormGroup({
              'newPassword': new FormControl('', [Validators.required, Validators.minLength(6)])
            });
            this.loaded = true;
          }
        });
    }
  }

  onSubmit() {
    let userWithNewPassword = {
      id: this.user.id,
      email: this.user.email,
      newpassword: this.form.get('newPassword').value
    };
    this.userService.changePassword(userWithNewPassword).subscribe(data => {
      this.toastrService.success(`Пароль изменен`);
      this.router.navigate(['/admin-panel/users']);
    });
  }

  getErrorMessagePassw() {
    return this.userValidate.getErrorMessagePassw(this.form.get('newPassword'));
  }

}
