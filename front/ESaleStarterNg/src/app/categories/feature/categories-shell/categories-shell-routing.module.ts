import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../categories-list-page/categories-list-page.module').then(m => m.CategoriesListPageModule)
    },
    {
        path: ':id',
        loadChildren: () => import('../category-items-page/category-items-page.module').then(m => m.CategoryItemsPageModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesShellRoutingModule { }
