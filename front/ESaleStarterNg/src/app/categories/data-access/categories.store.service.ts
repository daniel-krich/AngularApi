import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, switchMap, tap } from 'rxjs';
import { CategoryInterface } from 'src/app/shared/interfaces/category.interface';
import { CategoriesService } from './categories.service';
import { CategoryModel } from '../models/category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoriesStoreService {

    private categoriesSubject$: BehaviorSubject<CategoryInterface[]> = new BehaviorSubject<CategoryInterface[]>([]);

    categories$ = this.categoriesSubject$.asObservable();

    constructor(private categoriesService: CategoriesService) {
        this.loadCategories();
    }

    private loadCategories() {
        this.categoriesService.reqGetAllCategories().subscribe({
            next: (cat) => {
                this.categoriesSubject$.next(cat);
            }
        });
    }

    deleteCategoryById(id: number): Observable<void> {
        return this.categoriesService.reqDeleteCategoryById(id).pipe(
            tap(() => {
                this.categoriesSubject$.next(this.categoriesSubject$.value.filter(cat => cat.id !== id));
            })
        );
    }

    addCategory(category: CategoryModel): Observable<void> {
        return this.categoriesService.reqAddCategory(category).pipe(
            tap((cat) => {
                this.categoriesSubject$.next([...this.categoriesSubject$.value, cat]);
            }),
            switchMap(_ => EMPTY)
        )
    }

    updateCategoryById(id: number, category: CategoryModel): Observable<void> {
        return this.categoriesService.reqUpdateCategory(id, category).pipe(
            tap(() => {
                const categoriesUpdated = [...this.categoriesSubject$.value];
                const index = categoriesUpdated.findIndex(x => x.id === id);
                categoriesUpdated[index] = category;
                this.categoriesSubject$.next(categoriesUpdated);
            })
        );
    }
}