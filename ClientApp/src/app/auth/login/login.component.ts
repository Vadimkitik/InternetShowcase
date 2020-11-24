import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { Message } from 'src/app/shared/models/message.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;
  name: string;
  isLoggedIn: boolean = false;
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.message = new Message('', '');

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
  
  onSubmit() {
    this.authService.login(this.form.value)
      .subscribe(data => {
        console.log(`Loggin successful`);
        this.authService.saveToke(data["token"]);

       // this.router.navigate(['/admin-panel']);
      }, error => {
        this.showMessage({
          text: error.message,
          type: 'danger'
        });
      });
  }

  getErrorMessageEmail() {
    if (this.form.get('email').hasError('required')) {
      return 'Не оставлять пустым!';
    }
    return this.form.get('email').hasError('email') ? 'Введите корректный email' : '';
  }

  getErrorMessagePassv() {
    if (this.form.get('password').hasError('required')) {
      return 'Не оставлять пустым!';
    }
    return this.form.get('password').hasError('minlength') ? 'Пароль должен быть больше 5 символов' : '';
  }

  showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
}
