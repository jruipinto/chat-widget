import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cw-page-chat',
  templateUrl: './cw-page-chat.component.html',
  styleUrls: ['./cw-page-chat.component.scss']
})
export class CwPageChatComponent {
  @Input() messages: any[];
  @Output() routeChange = new EventEmitter<any>();
}
