import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.scss']
})
export class CardCommentComponent implements OnInit {
  @Input() data;
  @Input() selectable = false;

  constructor() { }

  ngOnInit (): void {
  }

}
