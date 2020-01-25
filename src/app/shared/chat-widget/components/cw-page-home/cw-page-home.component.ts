import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Conversation } from '../../models/conversation.model';

@Component({
  selector: 'app-cw-page-home',
  templateUrl: './cw-page-home.component.html',
  styleUrls: ['./cw-page-home.component.scss']
})
export class CwPageHomeComponent {
  @Input() conversations: Conversation[];
  @Output() routeChange = new EventEmitter<any>();
}
