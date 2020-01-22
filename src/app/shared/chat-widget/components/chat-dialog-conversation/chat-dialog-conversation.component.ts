import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-dialog-conversation',
  templateUrl: './chat-dialog-conversation.component.html',
  styleUrls: ['./chat-dialog-conversation.component.scss']
})
export class ChatDialogConversationComponent {
  @Input() messages: any[];
  @Output() routeChange = new EventEmitter<any>();

  constructor() { }

}
