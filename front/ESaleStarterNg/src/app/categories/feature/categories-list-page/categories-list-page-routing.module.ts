import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListPageComponent } from './categories-list-page.component';

const routes: Routes = [{ path: '', component: CategoriesListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesListPageRoutingModule { }
