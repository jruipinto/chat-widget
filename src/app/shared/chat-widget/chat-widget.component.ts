import { Component, Input } from '@angular/core';
import { Conversation } from './models/conversation.model';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.scss']
})
export class ChatWidgetComponent {
  @Input() conversations: Conversation[];
  @Input() messages: any[];
  route: 'icon' | 'home' | 'conversation' = 'icon';


  constructor() { }

}
