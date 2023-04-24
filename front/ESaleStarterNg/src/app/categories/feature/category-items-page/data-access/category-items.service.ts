import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/app.module';
import { CategoryWithItemsInterface } from 'src/app/shared/interfaces/category-with-items.interface';

@Injectable({
    providedIn: 'root'
})
export class CategoryItemsService {

    constructor(private httpClient: HttpClient,
        @Inject(BASE_URL) private baseUrl: string) { }

    reqCategoryWithItemsById(id: number): Observable<CategoryWithItemsInterface> {
        return this.httpClient.get<CategoryWithItemsInterface>(`${this.baseUrl}/api/categories/${id}`);
    }
}