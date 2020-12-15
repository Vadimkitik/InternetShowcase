import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { UserValidateService } from '../userValidate.service';

@Component({
    selector: 'users-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

    emailLine: string;
    @Input() user: User;    // изменяемый объект
    loaded: boolean = false;
    hide = true;
    form: FormGroup;

    constructor(
        private userService: UsersService,
        private router: Router,
        private toastrService: ToastrService,
        private userValidate: UserValidateService,
        activeRoute: ActivatedRoute
    ) {
        this.emailLine = activeRoute.snapshot.params["email"];
    }

    ngOnInit() {
        if (this.emailLine) {
            this.userService.getUserByEmail(this.emailLine)
                .subscribe((data: User) => {
                    this.user = data;
                    if (this.user != null) {
                        this.form = new FormGroup({
                            'userName': new FormControl('', [Validators.required]),
                            'email': new FormControl('', [Validators.required, Validators.email])
                        });
                        this.loaded = true;
                    }
                });
        }
    }

    onSubmit() {
        this.userService.updateUser(this.user).subscribe(() => {
            this.toastrService.success(`User changed`);
            this.router.navigateByUrl("/admin-panel/users");
        });
    }

    getErrorMessageName() {
        return this.userValidate.getErrorMessageName(this.form.get('userName'));
    }

    getErrorMessageEmail() {
        return this.userValidate.getErrorMessageEmail(this.form.get('email'));
    }
}
