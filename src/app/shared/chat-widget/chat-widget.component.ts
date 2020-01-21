import { Component } from '@angular/core';
import { Conversation } from './models/conversation.model';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.scss']
})
export class ChatWidgetComponent {
  public conversation: Conversation = {
    address: '910138725',
    feedback: 'V',
    message: 'message preview...'
  };

  constructor() { }

}
