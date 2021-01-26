import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeedbackForm } from 'src/app/shared/models/feedbackForm.model';
import { UserValidateService } from 'src/app/shared/services/userValidate.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overviewform',
  templateUrl: './dialog-overviewform.component.html',
  styleUrls: ['./dialog-overviewform.component.css']
})
export class DialogOverviewformComponent implements OnInit{

  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewformComponent>,
    @Inject(MAT_DIALOG_DATA) public feedbackForm: FeedbackForm,
    private userValidate: UserValidateService) {
      this.form = new FormGroup({
        'userName': new FormControl('', [Validators.required]),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'tel': new FormControl('', [Validators.required]),
        'message': new FormControl(''),
        'checkAvailability': new FormControl(''),
        'checkPrice': new FormControl('')
      })
    }

    ngOnInit() {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessageName() {
    return this.userValidate.getErrorMessageName(this.form.get('userName'));
  }

  getErrorMessageEmail() {
    return this.userValidate.getErrorMessageEmail(this.form.get('email'));
  }

  getErrorMessageTel() {
    return this.userValidate.getErrorMessageTel(this.form.get('tel'));
  }
}
