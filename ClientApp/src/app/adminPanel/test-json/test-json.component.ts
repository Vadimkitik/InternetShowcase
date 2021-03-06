import { Component, OnInit } from '@angular/core';
import dataJson from '../../jsonFiles/dataJson.json';

@Component({
  selector: 'test-json',
  templateUrl: './test-json.component.html',
  styleUrls: ['./test-json.component.css']
})
export class TestJsonComponent implements OnInit {

  constructor() { }
  public countryList: { id: number, name: string, parentId: number, children: [] }[] = dataJson;

  ngOnInit(): void { 
  }
}
