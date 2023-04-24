import { Component } from '@angular/core';
import { CategoriesStoreService } from '../../data-access/categories.store.service';
import { CategoryInterface } from 'src/app/shared/interfaces/category.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/ui/dialog-confirm/dialog-confirm.component';
import { filter, switchMap, take } from 'rxjs';
import { CategoryDialogComponent } from '../../ui/category-dialog/category-dialog.component';
import { CategoryModel } from '../../models/category.model';

@Component({
  selector: 'app-categories-list-page',
  templateUrl: './categories-list-page.component.html',
  styleUrls: ['./categories-list-page.component.scss']
})
export class CategoriesListPageComponent {

    categories$ = this.categoryStore.categories$;

    constructor(private categoryStore: CategoriesStoreService,
                private router: Router,
                private dialog: MatDialog) {

    }

    onDelete(category: CategoryInterface) {
        const dialogRef = this.dialog.open(DialogConfirmComponent, {
            maxWidth: '300px',
            width: '100%',
            data: {
                confirmText: `Are you sure you want to delete ${category.name} category? all associated items will be deleted as well.`
            }
        });

        dialogRef.afterClosed().pipe(
            take(1),
            filter(dialogBit => !!dialogBit),
            switchMap(() => this.categoryStore.deleteCategoryById(category.id))
        ).subscribe();
    }

    onAddCategory() {

        const addCatModel: CategoryModel = new CategoryModel();
        const dialogRef = this.dialog.open(CategoryDialogComponent, {
            maxWidth: '300px',
            width: '100%',
            data: addCatModel
        });

        dialogRef.afterClosed().pipe(
            take(1),
            filter(dialogBit => !!dialogBit),
            switchMap(() => this.categoryStore.addCategory(addCatModel))
        ).subscribe();
        
    }

    onUpdate(category: CategoryInterface) {
        const addCatModel: CategoryModel = new CategoryModel(category);
        const dialogRef = this.dialog.open(CategoryDialogComponent, {
            maxWidth: '300px',
            width: '100%',
            data: addCatModel
        });

        dialogRef.afterClosed().pipe(
            take(1),
            filter(dialogBit => !!dialogBit),
            switchMap(() => this.categoryStore.updateCategoryById(category.id, addCatModel))
        ).subscribe();
    }

    onRedirect(category: CategoryInterface) {
        this.router.navigate(['/categories/' + category.id]);
    }

}
