import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/app.module';
import { CategoryWithItemsInterface } from 'src/app/shared/interfaces/category-with-items.interface';
import { CategoryInterface } from 'src/app/shared/interfaces/category.interface';
import { CategoryModel } from '../models/category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    constructor(private httpClient: HttpClient,
        @Inject(BASE_URL) private baseUrl: string) { }

    public reqGetAllCategories(): Observable<CategoryInterface[]> {
        return this.httpClient.get<CategoryInterface[]>(this.baseUrl + '/api/categories');
    }

    public reqGetCategoryWithItemsById(id: number): Observable<CategoryWithItemsInterface> {
        return this.httpClient.get<CategoryWithItemsInterface>(`${this.baseUrl}/api/categories/${id}`);
    }

    public reqDeleteCategoryById(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/api/categories/${id}`);
    }

    public reqAddCategory(category: CategoryModel): Observable<CategoryInterface> {
        return this.httpClient.post<CategoryInterface>(this.baseUrl + '/api/categories', { ...category });
    }

    public reqUpdateCategory(id: number, category: CategoryModel): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/api/categories/${id}`, { ...category });
    }
}
