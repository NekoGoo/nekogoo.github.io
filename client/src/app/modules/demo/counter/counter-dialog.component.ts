import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-counter-dialog',
  template: `
    <h2 mat-dialog-title>Set Count</h2>
    <mat-dialog-content>
      Set your preferred count value:
      <mat-form-field>
        <input
          matInput
          type="number"
          [(ngModel)]="count"
          (keydown.enter)="onConfirm()"
          placeholder="Enter new count" />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-button (click)="onConfirm()">OK</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButton, MatDialogModule, MatFormField, MatInput, FormsModule],
})
export class CounterDialogComponent {
  count: number = this.data.count ?? 0;

  constructor(
    // https://material.angular.io/components/dialog
    private dialogRef: MatDialogRef<CounterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { count: number },
  ) {}

  onCancel() {
    this.dialogRef.close();
  }

  onConfirm() {
    this.dialogRef.close(this.count);
  }
}
