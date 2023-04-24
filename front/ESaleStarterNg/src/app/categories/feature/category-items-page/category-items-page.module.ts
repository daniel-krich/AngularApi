import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { CategoryItemsPageRoutingModule } from './category-items-page-routing.module';
import { CategoryItemsPageComponent } from './category-items-page.component';
import { ItemCardModule } from './ui/item-card/item-card.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CategoryItemsStoreService } from './data-access/category-items.store.service';


@NgModule({
  declarations: [
    CategoryItemsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CategoryItemsPageRoutingModule,
    ItemCardModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class CategoryItemsPageModule { }
