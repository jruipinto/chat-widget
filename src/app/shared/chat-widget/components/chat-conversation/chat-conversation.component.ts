import { Component, Input } from '@angular/core';
import { Conversation } from '../../models/conversation.model';

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.scss']
})
export class ChatConversationComponent {
  @Input() conversation: Conversation;

  constructor() { }

}
