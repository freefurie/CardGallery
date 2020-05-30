import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss']
})
export class CommentDialogComponent implements OnInit {
  commentForm: FormGroup = new FormGroup({
    commentName: new FormControl(''),
    commentBody: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<CommentDialogComponent>) { }

  ngOnInit (): void {
  }

  submit () {
    if (this.commentForm.valid) {
      this.dialogRef.close({ name: this.commentForm.get('commentName').value, text: this.commentForm.get('commentBody').value })
    }
  }

  onCancel () {
    this.dialogRef.close();
  }

  get commentBody () {
    return this.commentForm.get('commentBody');
  }
}
