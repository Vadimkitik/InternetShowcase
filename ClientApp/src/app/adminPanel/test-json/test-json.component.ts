import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import dataJson from '../../jsonFiles/dataJson.json';

@Component({
  selector: 'test-json',
  templateUrl: './test-json.component.html',
  styleUrls: ['./test-json.component.css']
})
export class TestJsonComponent implements OnInit {

  form: FormGroup;
  name: string;
  isLoggedIn: boolean = false;
  hide = true;
  constructor() { }
  public countryList: { id: number, name: string, parentId: number, children: [] }[] = dataJson;

  ngOnInit(): void { 
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
}
