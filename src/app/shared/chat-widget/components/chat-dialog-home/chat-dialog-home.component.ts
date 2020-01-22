import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Conversation } from '../../models/conversation.model';

@Component({
  selector: 'app-chat-dialog-home',
  templateUrl: './chat-dialog-home.component.html',
  styleUrls: ['./chat-dialog-home.component.scss']
})
export class ChatDialogHomeComponent {
  @Input() conversations: Conversation[];
  @Output() routeChange = new EventEmitter<any>();

  constructor() { }

}
