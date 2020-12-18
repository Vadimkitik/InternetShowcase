import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserRoles } from 'src/app/shared/models/user-role/userRoles.model';
import { UserWithRoles } from 'src/app/shared/models/user-role/userWithRoles.model';
import { RolesService } from 'src/app/shared/services/roles.service';

@Component({
  selector: 'user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  userId: string;
  userWithRoles: UserWithRoles = new UserWithRoles();
  userRoles: UserRoles = new UserRoles();   
  loaded: boolean = false;
  
  constructor(
      private router: Router,
      private toastrService: ToastrService,
      private rolesService: RolesService,
      private activeRoute: ActivatedRoute
      ) {
        this.userId = activeRoute.snapshot.params["userId"];
       }

  ngOnInit() {
    if (this.userId) {
      this.rolesService.GetUserWithRoles(this.userId)
          .subscribe( res => {
              this.userWithRoles = res;
              if (this.userWithRoles != null) {
                  this.loaded = true;
                  this.userRoles = {
                    userId: res.userId,
                    roles: res.userRoles
                  }
              }              
          });
  }    
}

onToggle(event) {
  if (event.checked) {
    this.userRoles.roles.push(event.value)
  }
  else {
    let index = this.userRoles.roles.indexOf(event.value);
    if(index > -1) {
      this.userRoles.roles.splice(index, 1);
    }    
  }
}

save() {
  this.rolesService.EditUserRoles(this.userRoles).subscribe(res => {
    this.toastrService.success(`Roles for ${this.userWithRoles.userEmail} changed successfully!`);
    this.router.navigate(["//admin-panel/users"]);
  })
}
}
