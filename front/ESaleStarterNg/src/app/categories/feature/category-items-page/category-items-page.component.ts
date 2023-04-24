import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, filter, map, takeUntil } from 'rxjs';
import { CategoryItemsStoreService } from './data-access/category-items.store.service';

@Component({
  selector: 'app-category-items-page',
  templateUrl: './category-items-page.component.html',
  styleUrls: ['./category-items-page.component.scss']
})
export class CategoryItemsPageComponent implements OnInit, OnDestroy {

    private unsubscribeFromRouter = new Subject<void>();
    
    categoryWithItems$ = this.categoryItems.category$;

    constructor(private route: ActivatedRoute, private categoryItems: CategoryItemsStoreService) { }

    
    ngOnInit(): void {
        this.route.paramMap.pipe(
            filter(x => !!x),
            map(x => +x.get('id')!),
            takeUntil(this.unsubscribeFromRouter)
        ).subscribe({
            next: (id) => {
                this.categoryItems.loadCategory(id);
            },
            complete: () => this.categoryItems.purgeCategory()
        });
    }
    
    ngOnDestroy(): void {
        this.unsubscribeFromRouter.next();
    }
}
