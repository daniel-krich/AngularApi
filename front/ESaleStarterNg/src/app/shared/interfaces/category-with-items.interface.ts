import { CategoryItemInterface } from "./category-item.interface";
import { CategoryInterface } from "./category.interface";

export interface CategoryWithItemsInterface extends CategoryInterface {
    items: CategoryItemInterface[];
}