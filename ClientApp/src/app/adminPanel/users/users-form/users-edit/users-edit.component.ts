import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

    email: string;
    @Input() user: User;    // изменяемый объект
    loaded: boolean = false;

    constructor(
        private userService: UsersService,
        private router: Router,
        private toastrService: ToastrService,
        activeRoute: ActivatedRoute
        ) 
    {
        this.email = activeRoute.snapshot.params["email"];
    }

    ngOnInit() {
        if (this.email)
            this.userService.getUserByEmail(this.email)
                .subscribe((data: User) => {
                    this.user = data;
                    if (this.user != null) this.loaded = true;
                });
    }

    save() {
        this.userService.updateUser(this.user).subscribe(() => {
            this.toastrService.success(`User changed`); 
            this.router.navigateByUrl("/admin-panel/users");
        });
    }
}
