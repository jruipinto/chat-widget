import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWidgetComponent } from './chat-widget.component';
import { CwFloatingIconComponent } from './components/cw-floating-icon/cw-floating-icon.component';
import { CwPageHomeComponent } from './components/cw-page-home/cw-page-home.component';
import { CwPageChatComponent } from './components/cw-page-chat/cw-page-chat.component';
import { CwChatPreviewComponent } from './components/cw-page-home/cw-chat-preview/cw-chat-preview.component';

@NgModule({
  declarations: [
    ChatWidgetComponent,
    CwFloatingIconComponent,
    CwPageHomeComponent,
    CwPageChatComponent,
    CwChatPreviewComponent
  ],
  imports: [CommonModule],
  exports: [ChatWidgetComponent]
})
export class ChatWidgetModule { }
