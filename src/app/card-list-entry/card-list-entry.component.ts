import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list-entry',
  templateUrl: './card-list-entry.component.html',
  styleUrls: ['./card-list-entry.component.scss']
})
export class CardListEntryComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit (): void {
  }

}
