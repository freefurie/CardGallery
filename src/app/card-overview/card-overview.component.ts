import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.scss'],
})
export class CardOverviewComponent implements OnInit {
  @Input() data;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  constructor(private rest: RestClientService) {}

  ngOnInit(): void {}

  editCard() {
    this.edit.emit(this.data.id);
  }

  deleteCard() {
    this.delete.emit(this.data.id);
  }
}
