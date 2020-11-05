import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent {

  public errorMsg;
    @Input() user: User = new User();    // добавляемый объект
    constructor(
        private usersService: UsersService,
        private router: Router) { }

    save() {
        console.log(this.user);
        this.usersService.createUser(this.user).subscribe(() => {
             this.router.navigateByUrl("/admin-panel/users")
            }, error => this.errorMsg = error);
     }
}
