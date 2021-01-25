import { Injectable } from "@angular/core";
@Injectable()
export class UserValidateService {
    
    getErrorMessageName(userName) {
        if (userName.hasError('required')) {
          return 'Не оставлять пустым!';
        }
      }
    
      getErrorMessageEmail(email) {
        if (email.hasError('required')) {
          return 'Не оставлять пустым!';
        }
        return email.hasError('email') ? 'Неверный формат Email' : '';
      }
      getErrorMessagePassw(password) {
        if (password.hasError('required')) {
          return 'Не оставлять пустым!';
        }
        return password.hasError('minlength') ? 'Пароль должен быть больше 5 символов' : '';
      }

      getErrorMessageTel(telephone) {
        if (telephone.hasError('required')) {
          return 'Не оставлять пустым!';
        }
        return telephone.hasError('pattern') ? 'Номер телефона должен состоять из кода и номера' : '';
      }

      
}