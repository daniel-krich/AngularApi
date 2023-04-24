import { CategoryInterface } from "src/app/shared/interfaces/category.interface";

export class CategoryModel implements CategoryInterface {
    id: number = 0;
    name: string = '';
    description: string = '';
    imageUrl: string = '';
    constructor(category?: CategoryInterface) {
        if(category) {
            this.id = category.id;
            this.name = category.name;
            this.description = category.description;
            this.imageUrl = category.imageUrl;
        }
    }
}