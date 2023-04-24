import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesToolBarComponent } from './categories-tool-bar.component';

describe('CategoriesToolBarComponent', () => {
  let component: CategoriesToolBarComponent;
  let fixture: ComponentFixture<CategoriesToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesToolBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
