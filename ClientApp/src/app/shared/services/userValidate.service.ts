import { Injectable } from "@angular/core";
@Injectable()
export class UserValidateService {
    
    getErrorMessageName(userName) {
        if (userName.hasError('required')) {
          return 'You must enter a value';
        }
      }
    
      getErrorMessageEmail(email) {
        if (email.hasError('required')) {
          return 'You must enter a value';
        }
        return email.hasError('email') ? 'Not a valid email' : '';
      }
      getErrorMessagePassw(password) {
        if (password.hasError('required')) {
          return 'Не оставлять пустым!';
        }
        return password.hasError('minlength') ? 'Пароль должен быть больше 5 символов' : '';
      }
}