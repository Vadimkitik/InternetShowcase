import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    errorMsg: string;
    message: string;

    constructor(
        private userService: UsersService,
        private router: Router,
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
                    console.log(this.user);
                    if (this.user != null) this.loaded = true;
                }, error => this.errorMsg = error);
    }

    save() {
       console.log(this.user);
        this.userService.updateUser(this.user).subscribe(() => { 
            this.router.navigateByUrl("/admin-panel/users")
        }, error => this.errorMsg = error);
    }
}
