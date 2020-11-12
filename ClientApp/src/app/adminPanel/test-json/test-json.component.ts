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
    this.countryList = this.list_to_tree(this.countryList);  
    console.log(this.countryList);  
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
      
      if (node.parentId != 0) {
        console.log(node)
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
}
