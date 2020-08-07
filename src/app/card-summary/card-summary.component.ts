import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestClientService } from '../rest-client.service';
import { take, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.scss']
})
export class CardSummaryComponent implements OnInit {
  cardId;
  card;
  commentDialogSub;

  constructor(private route: ActivatedRoute, private rest: RestClientService, private dialog: MatDialog) { }

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

  /*commentDialog () {
    this.commentDialogSub = this.dialog.open(CommentDialogComponent).afterClosed().subscribe(
      data => this.rest.postComment(this.cardId, data).subscribe()
    );
  }*/
}
