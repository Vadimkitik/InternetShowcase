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
  //categories = [];

  ngOnInit(): void {
   // console.log(this.countryList);
    //this.sortData(this.countryList);
    console.log(this.entries);
    this.entries = this.list_to_tree(this.entries);
   // this.categories = this.list_to_tree(this.countryList);    
  }

  list_to_tree(list) {
    console.log(list)
    let map = {}, node, roots = [], i;
    
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    console.log(map);
    console.log(list)
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId !== "0") {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
  
  categories =[{
        "id" : 1,
        "name" : "Belarus", 
        "parentId" : 0,
        "children": null
    },
    {
        "id" : 2,
        "name" : "Russia", 
        "parentId" : 0,
        "children": null
    },
    {
        "id" : 3,
        "name" : "Hrondo", 
        "parentId" : 1,
        "children": null
    },
    {
        "id" : 4,
        "name" : "Moscow", 
        "parentId" : 2,
        "children": null
    },
    {
        "id" : 5,
        "name" : "Minsk", 
        "parentId" : 1,
        "children": null
    },
    {
        "id" : 6,
        "name" : "Mosti", 
        "parentId" : 3,
        "children": null
    },
    {
        "id" : 7,
        "name" : "Lida", 
        "parentId" : 3,
        "children": null
    },
    {
        "id" : 8,
        "name" : "Himki", 
        "parentId" : 4,
        "children": null
    },
    {
        "id" : 9,
        "name" : "XXXXXXX", 
        "parentId" : 6,
        "children": null
    }
];
  entries = [{
      "id": "12",
      "parentId": "0",
      "text": "Man",
      "children": null
    },
    {
      "id": "6",
      "parentId": "12",
      "text": "Boy",
      "children": null
    },
    {
      "id": "7",
      "parentId": "12",
      "text": "Other",
      "children": null
    },
    {
      "id": "9",
      "parentId": "0",
      "text": "Woman",
      "children": null
    },
    {
      "id": "11",
      "parentId": "9",
      "text": "Girl",
      "children": null
    }
  ];


  
  // sortData(data: any[]) {
  //   data.forEach(element => {

  //     if (element['parant_ID'] == 0) {
  //       this.categories.push({
  //         id: element['id'],
  //         name: element['name'],
  //         children: []
  //       })
  //     }

  //     if (element['parant_ID'] != 0) {

  //       this.categories.forEach(item => {
  //         if (element['parant_ID'] == item['id']) {

  //           item['children'].push({
  //             id: element['id'],
  //             name: element['name'],
  //             children: []
  //           })
  //         }
  //         else {
  //           item['children'].forEach(cata => {
  //             if (element['parant_ID'] == cata['id']) {

  //               cata['children'].push({
  //                 id: element['id'],
  //                 name: element['name'],
  //                 children: []
  //               })
  //             }
  //           });
  //         }
  //       });
  //     }
  //   });
  // }
  
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
