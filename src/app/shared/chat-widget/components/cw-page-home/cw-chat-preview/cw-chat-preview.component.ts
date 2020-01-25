import { Component, Input } from '@angular/core';
import { Conversation } from '../../../models/conversation.model';

@Component({
  selector: 'app-cw-chat-preview',
  templateUrl: './cw-chat-preview.component.html',
  styleUrls: ['./cw-chat-preview.component.scss']
})
export class CwChatPreviewComponent {
  @Input() conversation: Conversation;
}
