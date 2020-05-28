import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RestClientService } from '../rest-client.service';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @ViewChild('searchbar', { static: true }) searchbar: ElementRef;

  cardList = [];
  searchText = '';

  constructor(private rest: RestClientService) { }

  ngOnInit (): void {
    fromEvent(this.searchbar.nativeElement, 'keyup')
      .pipe(map((event: any) => { return event.target.value; }), debounceTime(900), distinctUntilChanged())
      .subscribe((text: string) => { this.applyFilter(); });
  }

  ngAfterContentInit () {
    this.loadData('');
  }

  loadData (filter) {
    this.rest.getCards().subscribe((x) => {
      this.cardList.length = 0;
      x.forEach(element => {
        if (element.name.toLowerCase().includes(filter.toLowerCase())) {
          this.cardList.push(element);
        }
      });
    })
  }

  applyFilter () {
    const filter = this.searchText.trim().toLowerCase();
    this.loadData(filter);
  }
}
