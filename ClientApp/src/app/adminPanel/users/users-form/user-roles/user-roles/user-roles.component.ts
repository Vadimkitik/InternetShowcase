import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserRoles } from 'src/app/shared/models/userRoles.model';
import { UserWithRoles } from 'src/app/shared/models/userWithRoles.model';
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
              }
              console.log(this.userWithRoles);
              
              this.userWithRoles.userRoles = ['admin', 'manager', 'userewq'];
              console.log(this.userWithRoles.userRoles);

              this.userWithRoles.allRoles.forEach(role => {
                console.log(`${this.userWithRoles.userRoles.find(x => x == role.name)} ${role.name}` );
              })              

          });
  }    
}

save() {

}
}
