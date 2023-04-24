import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModel } from '../../models/category.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-category-dialog',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FormsModule
    ],
    templateUrl: './category-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public categoryModel: CategoryModel,
        private dialogRef: MatDialogRef<CategoryDialogComponent>) {
    }

    confirm() {
        this.dialogRef.close(true);
    }

    close() {
        this.dialogRef.close(false);
    }
}
