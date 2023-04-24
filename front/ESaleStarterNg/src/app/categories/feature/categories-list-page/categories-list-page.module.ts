import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesListPageRoutingModule } from './categories-list-page-routing.module';
import { CategoriesListPageComponent } from './categories-list-page.component';
import { CategoryCardModule } from './ui/category-card/category-card.module';
import { DialogConfirmComponent } from 'src/app/shared/ui/dialog-confirm/dialog-confirm.component';
import { CategoriesToolBarModule } from './ui/categories-tool-bar/categories-tool-bar.module';
import { CategoryDialogComponent } from '../../ui/category-dialog/category-dialog.component';


@NgModule({
  declarations: [
    CategoriesListPageComponent
  ],
  imports: [
    CommonModule,
    CategoryCardModule,
    CategoriesListPageRoutingModule,
    DialogConfirmComponent,
    CategoryDialogComponent,
    CategoriesToolBarModule
  ]
})
export class CategoriesListPageModule { }
