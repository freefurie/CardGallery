import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../../../rest-client.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {

  submitted = true;

  newCardForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  });

  constructor(private rest: RestClientService, public dialogRef: MatDialogRef<CardCreateComponent>, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.newCardForm.valid && this.submitted) {
      const data = {
        name: this.newCardForm.value.name,
        description: this.newCardForm.value.description,
        image: this.newCardForm.value.image
      };

      this.rest.postCard(data).subscribe((x) => {
        this.toastr.success(
          "Card added to the list!",
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
          "There was an error adding the card to the list!",
          "Error",
          {
            timeOut: 3000,
            progressBar: true,
            closeButton: true,
            positionClass: 'toast-bottom-center'
          }
        ));
    } else {
      return;
    }
  }

  onNoClick(): void {
    this.submitted = false;
    this.dialogRef.close(null);
  }

  get name() {
    return this.newCardForm.get('name');
  }

  get description() {
    return this.newCardForm.get('description');
  }

  get image() {
    return this.newCardForm.get('image');
  }
}
