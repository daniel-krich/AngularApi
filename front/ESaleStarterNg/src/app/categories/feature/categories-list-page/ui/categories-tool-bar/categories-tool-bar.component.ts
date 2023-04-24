import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories-tool-bar',
  templateUrl: './categories-tool-bar.component.html',
  styleUrls: ['./categories-tool-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesToolBarComponent {
    @Output() addCategory: EventEmitter<void> = new EventEmitter<void>();

    onAddCategory() {
        this.addCategory.emit();
    }
}
