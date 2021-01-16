import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { TreeService } from '../../services/tree.service';
import { HeaderComponent } from './header.component';

let fixture: ComponentFixture<HeaderComponent>;
let component: HeaderComponent;
let page: Page;

describe('HeaderComponent', () => {
    let categoryServiceStub: Partial<CategoryService>;
    let treeServiceStub: Partial<TreeService>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
          {provide: CategoryService, useValue: categoryServiceStub},
          {provide: TreeService, useValue: treeServiceStub}
      ]
    }).compileComponents()
      .then(createComponent);
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // it('should inject CategoryService', () => {
  //   const categoryService = fixture.debugElement.injector.get(CategoryService);
  //   fixture.detectChanges();
  //   expect(component.categories)
  // });
});

function createComponent() {
  fixture = TestBed.createComponent(HeaderComponent);
  component = fixture.componentInstance;

  // change detection triggers ngOnInit which gets a hero
  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    // got the heroes and updated component
    // change detection updates the view
    fixture.detectChanges();
    page = new Page();
  });
}

class Page {
  /** Hero line elements */
  heroRows: HTMLLIElement[];

  /** Highlighted DebugElement */
  highlightDe: DebugElement;

  /** Spy on router navigate method */
  navSpy: jasmine.Spy;

  constructor() {
    const heroRowNodes = fixture.nativeElement.querySelectorAll('li');
    this.heroRows = Array.from(heroRowNodes);


    // Get the component's injected router navigation spy
    const routerSpy = fixture.debugElement.injector.get(Router);
    this.navSpy = routerSpy.navigate as jasmine.Spy;
  }
}

