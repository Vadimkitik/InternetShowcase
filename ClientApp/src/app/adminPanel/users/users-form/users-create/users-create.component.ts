import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent {

  @Input() user: User = new User();    // добавляемый объект
  
  constructor(
      private usersService: UsersService,
      private router: Router,
      private toastrService: ToastrService
      ) { }

  save() {
    this.usersService.createUser(this.user).subscribe(() => {
      this.toastrService.success(`User ${this.user.name} is Created`);
      this.router.navigateByUrl("/admin-panel/users")
    });
  }
}
