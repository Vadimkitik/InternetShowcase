import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  load = false;
  message: string;
  buttonColor: string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (queryParam: any) => {
        if(queryParam['code'] == null || queryParam['userId'] == null){
          this.toastrService.warning("Чтобы подтвердить email перейдите по ссылке в письме");
          this.router.navigate(['/auth/login']);          
        }
        else {
          let model = {
            userId: queryParam['userId'],
            code: queryParam['code']
          }
          this.confirm(model);
        }        
      });      
  }

  private confirm(model) {    
    this.authService.confirmEmail(model).subscribe(res => {
      this.message = "Почта подтверждена успешно. Теперь Вы можете войти в систему.";
      this.buttonColor = "primary";
      this.load = true;
    }, error =>{
      console.log(error)
      this.message = "При подтверждении пароля вознилка ошибка.";
      this.buttonColor = "warn";
      this.load = true;
    });
  }

}
