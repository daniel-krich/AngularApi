import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { CategoryWithItemsInterface } from 'src/app/shared/interfaces/category-with-items.interface';
import { CategoryItemsService } from './category-items.service';

@Injectable({
    providedIn: 'root'
})
export class CategoryItemsStoreService {

    private categorySubject$: BehaviorSubject<CategoryWithItemsInterface | null> = new BehaviorSubject<CategoryWithItemsInterface | null>(null);

    category$ = this.categorySubject$.asObservable();

    constructor(private categoryItems: CategoryItemsService) { }

    loadCategory(id: number) {
        this.categoryItems.reqCategoryWithItemsById(id).pipe(
            tap((cat) => {
                this.categorySubject$.next(cat);
            })
        ).subscribe();
    }

    purgeCategory() {
        this.categorySubject$.next(null);
    }
}