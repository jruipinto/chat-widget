import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWidgetComponent } from './chat-widget.component';
import { ChatConversationComponent } from './components/chat-conversation/chat-conversation.component';



@NgModule({
  declarations: [ChatWidgetComponent, ChatConversationComponent],
  imports: [CommonModule],
  exports: [ChatWidgetComponent]
})
export class ChatWidgetModule { }
