import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryInterface } from 'src/app/shared/interfaces/category.interface';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryCardComponent {
    @Input() category?: CategoryInterface;

    @Output() delete: EventEmitter<CategoryInterface> = new EventEmitter<CategoryInterface>();

    @Output() update: EventEmitter<CategoryInterface> = new EventEmitter<CategoryInterface>();

    @Output() redirect: EventEmitter<CategoryInterface> = new EventEmitter<CategoryInterface>();

    onDelete() {
        this.delete.emit(this.category);
    }

    onUpdate() {
        this.update.emit(this.category);
    }

    onRedirect() {
        this.redirect.emit(this.category);
    }
}