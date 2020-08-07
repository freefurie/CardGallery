import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RestClientService } from 'src/app/rest-client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.scss'],
})
export class CardDeleteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private rest: RestClientService,
    public dialogRef: MatDialogRef<CardDeleteComponent>,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  submit() {
    this.rest.deleteCard(this.data.id).subscribe((x) => {
      this.toastr.success(
        "Card was deleted from the list!",
        "Success",
          {
            timeOut: 3000,
            progressBar: true,
            closeButton: true,
            positionClass: 'toast-bottom-center'
          }
      );
      this.dialogRef.close(x);
    },
      error => this.toastr.error(
        "There was an error deleting the card from the list!",
        "Error",
          {
            timeOut: 3000,
            progressBar: true,
            closeButton: true,
            positionClass: 'toast-bottom-center'
          }
      ));
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }
}
