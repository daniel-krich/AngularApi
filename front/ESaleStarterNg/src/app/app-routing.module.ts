import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'categories',
        loadChildren: () => import('./categories/feature/categories-shell/categories-shell.module').then(m => m.CategoriesShellModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'categories'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
