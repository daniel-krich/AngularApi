import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryItemsPageComponent } from './category-items-page.component';

const routes: Routes = [{ path: '', component: CategoryItemsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryItemsPageRoutingModule { }
