import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewformComponent } from './dialog-overviewform.component';

describe('DialogOverviewformComponent', () => {
  let component: DialogOverviewformComponent;
  let fixture: ComponentFixture<DialogOverviewformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOverviewformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
