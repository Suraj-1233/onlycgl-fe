import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.component.html',
  styleUrls: ['./test-summary.component.css']
})
export class TestSummaryComponent {

  displayedColumns: string[] = ['section', 'questions', 'answered', 'notAnswered', 'markedForReview', 'notVisited'];
  sections :any

  constructor(private dialogRef: MatDialogRef<TestSummaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
       this.sections=data
    }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    // logic for submitting the test
    this.dialogRef.close();
  }
}
