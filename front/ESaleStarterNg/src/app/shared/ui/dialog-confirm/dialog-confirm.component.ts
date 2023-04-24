import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-confirm',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
],
  templateUrl: './dialog-confirm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogConfirmComponent {
    confirmText: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: { confirmText: string },
                private dialogRef: MatDialogRef<DialogConfirmComponent>) {
        this.confirmText = data.confirmText;
    }

    closeWithYes() {
        this.dialogRef.close(true);
    }

    closeWithNo() {
        this.dialogRef.close(false);
    }
}