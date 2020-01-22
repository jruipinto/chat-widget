import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWidgetComponent } from './chat-widget.component';
import { ChatConversationComponent } from './components/chat-conversation/chat-conversation.component';
import { ChatFloatingIconComponent } from './components/chat-floating-icon/chat-floating-icon.component';
import { ChatDialogHomeComponent } from './components/chat-dialog-home/chat-dialog-home.component';



@NgModule({
  declarations: [ChatWidgetComponent, ChatConversationComponent, ChatFloatingIconComponent, ChatDialogHomeComponent],
  imports: [CommonModule],
  exports: [ChatWidgetComponent]
})
export class ChatWidgetModule { }
