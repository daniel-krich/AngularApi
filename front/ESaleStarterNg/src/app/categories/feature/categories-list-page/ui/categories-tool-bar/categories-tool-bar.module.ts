import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesToolBarComponent } from './categories-tool-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CategoriesToolBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [CategoriesToolBarComponent]
})
export class CategoriesToolBarModule { }
