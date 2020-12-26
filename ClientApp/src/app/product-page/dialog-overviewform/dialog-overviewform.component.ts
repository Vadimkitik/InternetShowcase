import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overviewform',
  templateUrl: './dialog-overviewform.component.html',
  styleUrls: ['./dialog-overviewform.component.css']
})
export class DialogOverviewformComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
