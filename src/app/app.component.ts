import { Component } from '@angular/core';
import { Conversation } from './shared/chat-widget/models/conversation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-project';

  public conversations: Conversation[] = [
    {
      address: '910138725',
      feedback: 'unread',
      message: 'message preview...'
    },
    {
      address: '910138725',
      feedback: 'pending',
      message: 'message preview...'
    },
    {
      address: '910138725',
      feedback: 'delivered',
      message: 'message preview...'
    },
    {
      address: '910138725',
      feedback: 'delivered',
      message: 'message preview...'
    },
    {
      address: '910138725',
      feedback: 'failed',
      message: 'message preview...'
    },
    {
      address: '910138725',
      feedback: 'read',
      message: 'message preview...'
    }
  ];
}
