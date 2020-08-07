import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestClientService } from '../rest-client.service';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CardCreateComponent } from './card-dialogs/card-create/card-create.component';
import { CardEditComponent } from './card-dialogs/card-edit/card-edit.component';
import { CardDeleteComponent } from './card-dialogs/card-delete/card-delete.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  logged: boolean = false;

  cardList = [];

  constructor(public dialog: MatDialog, private rest: RestClientService) { }

  ngOnInit(): void {
    this.loadData();
  }

  login() {
    const val = this.form.value

    if (val.email && val.password) {
      this.rest.getAuth().subscribe((x) => {
        if (val.email == x.mail && val.password == x.pass) {
          this.logged = true;
          this.loadData();
        }
      })
    }
  }

  loadData() {
    this.rest.getCards().subscribe((x) => {
      this.cardList = x
    })
  }

  addCard(): void {
    const dialogRef = this.dialog.open(CardCreateComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.loadData();
    });
  }

  editCard(id): void {
    const dialogRef = this.dialog.open(CardEditComponent, { data: { id: id } });
    dialogRef.afterClosed().subscribe((result) => {
      this.loadData();
    });
  }

  deleteCard(id): void {
    const dialogRef = this.dialog.open(CardDeleteComponent, { data: { id: id } });
    dialogRef.afterClosed().subscribe((result) => {
      this.loadData();
    });
  }
}
