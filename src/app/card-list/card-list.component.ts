import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cardList = []

  constructor(private rest: RestClientService) { }

  ngOnInit (): void {
  }

  ngAfterContentInit () {
    this.loadData();
  }

  loadData () {
    this.rest.getCards().subscribe((x) => {
      this.cardList = x;
    })
  }
}
