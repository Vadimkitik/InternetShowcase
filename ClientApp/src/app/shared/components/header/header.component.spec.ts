import { TestBed, waitForAsync } from '@angular/core/testing';
import { CategoryService } from '../../services/category.service';
import { TreeService } from '../../services/tree.service';
import { HeaderComponent } from './header.component';


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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
