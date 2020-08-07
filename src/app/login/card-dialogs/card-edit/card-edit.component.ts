import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestClientService } from 'src/app/rest-client.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})
export class CardEditComponent implements OnInit {
  submitted = true;

  newCardForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private rest: RestClientService,
    public dialogRef: MatDialogRef<CardEditComponent>,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.rest.getCard(this.data.id).subscribe((x) => {
      this.newCardForm.setValue({ name: x.name, description: x.description, image: x.image })
    })
  }

  submit() {
    if (this.newCardForm.valid && this.submitted) {
      const data = {
        name: this.newCardForm.value.name,
        description: this.newCardForm.value.description,
        image: this.newCardForm.value.image,
      };

      this.rest.putCard(this.data.id, data).subscribe(
        (x) => {
          this.toastr.success('Card was edited and saved!', 'Success', {
            timeOut: 3000,
            progressBar: true,
            closeButton: true,
            positionClass: 'toast-bottom-center',
          });
          this.dialogRef.close(x);
        },
        (error) =>
          this.toastr.error(
            'There was an error editing the card!',
            'Error',
            {
              timeOut: 3000,
              progressBar: true,
              closeButton: true,
              positionClass: 'toast-bottom-center',
            }
          )
      );
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
