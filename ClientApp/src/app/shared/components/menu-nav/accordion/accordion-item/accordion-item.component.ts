import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate('250ms'))
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)'})),
      state('rotated', style({ transform: 'rotate(180deg)'})),
      transition('default <=> rotated', animate('250ms'))
    ])
  ]
})
export class AccordionItemComponent implements OnInit {

  @Output() closeDrawerEvent = new EventEmitter<boolean>();
  @Input() data:
    {
      name: string,
      line: string,
      children: []
    };
  showBody = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  closeDrawer(value: boolean, line: string) {
    this.closeDrawerEvent.emit(value);
    this.router.navigate(['products/', line]);
    if (this.showBody == true) {
      this.toggle();
    }
  }

  toggle() {
    this.showBody = !this.showBody;
  }
}
