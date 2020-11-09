import { Component, OnInit } from '@angular/core';
import dataJson from '../../jsonFiles/dataJson.json';

@Component({
  selector: 'test-json',
  templateUrl: './test-json.component.html',
  styleUrls: ['./test-json.component.css']
})
export class TestJsonComponent implements OnInit {

  constructor() { }
  public countryList: { name: string, code: string }[] = dataJson;
  categories = [];
  categories_rec = [];

  ngOnInit(): void {
    console.log(this.countryList);
    this.sortData(this.countryList);
    console.log(this.categories);
    this.sortData_recurs(this.countryList);
    console.log(this.categories_rec);
  }


  sortData_recurs(data: any[]) {

    data.forEach(element => {

      if (element['parant_ID'] == 0) {
        this.categories_rec.push({
          id: element['id'],
          name: element['name'],
          children: []
        })
      }
      if (element['parant_ID'] != 0) {
        this.categories_rec.forEach(item => {
          if (element['parant_ID'] == item['id']) {

            item['children'].push({
              id: element['id'],
              name: element['name'],
              children: []
            })
          }
          if (element['parant_ID'] != item['id']) {
            item['children'].forEach(cata => {
              if (element['parant_ID'] == cata['id']) {

                cata['children'].push({
                  id: element['id'],
                  name: element['name'],
                  children: []
                })
              }
            });
          } 
        });
      }
    });
  }
  sortData(data: any[]) {
    data.forEach(element => {

      if (element['parant_ID'] == 0) {
        this.categories.push({
          id: element['id'],
          name: element['name'],
          children: []
        })
      }

      if (element['parant_ID'] != 0) {

        this.categories.forEach(item => {
          if (element['parant_ID'] == item['id']) {

            item['children'].push({
              id: element['id'],
              name: element['name'],
              children: []
            })
          }
          if (element['parant_ID'] != item['id']) {
            item['children'].forEach(cata => {
              if (element['parant_ID'] == cata['id']) {

                cata['children'].push({
                  id: element['id'],
                  name: element['name'],
                  children: []
                })
              }
            });
          } 
        });
      }
    });
  }
  // catReplace(data: any[]) {
  //   data.forEach(element => {

  //     this.categoriesAll.push({
  //       id: element.id,
  //       line: element.categoryLine,
  //       name: element.categoryName                
  //     });

  //     for(let key in element) {

  //       if(Array.isArray(element[key]) && element[key].length != 0) {
  //         this.catReplace(element[key]);
  //       }
  //     }
  //   });
  // }
}
