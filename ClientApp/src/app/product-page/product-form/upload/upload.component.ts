import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType } from '@angular/common/http';

import { UploadService } from 'src/app/shared/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  message: string;
  progress: number;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  uploadFile = (files) => {
    if(files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.uploadService.UploadFile(formData).subscribe(event => {
        if(event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
        }
        else if(event.type === HttpEventType.Response) {
            this.message = 'Upload file success!';
            this.onUploadFinished.emit(event.body);
        }
    });
}

}
