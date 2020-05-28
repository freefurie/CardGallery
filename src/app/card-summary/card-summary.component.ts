import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestClientService } from '../rest-client.service';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.scss']
})
export class CardSummaryComponent implements OnInit {
  cardId;
  card

  constructor(private route: ActivatedRoute, private rest: RestClientService) { }

  ngOnInit (): void {
    this.route.paramMap.pipe(map(x => x), take(1)).subscribe((params) => {
      this.cardId = params.get('id');
      this.loadData();
    });
  }

  loadData () {
    this.rest.getCard(this.cardId).subscribe(x => {
      this.card = x;
    });
  }

}
