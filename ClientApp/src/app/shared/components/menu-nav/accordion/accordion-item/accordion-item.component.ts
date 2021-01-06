import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {

  @Output() closeDrawerEvent = new EventEmitter<boolean>();
  @Input() data: 
  { name: string, 
    line: string, 
    children: []
  };
  showBody = false;

  constructor( private router: Router) {}

  ngOnInit(): void {}

  closeDrawer(value: boolean, line: string) {
    this.closeDrawerEvent.emit(value);
    this.router.navigate(['products/', line]);
  }

  toggle() {
    this.showBody = !this.showBody;
  }
}
