import { Component } from '@angular/core';
import { CwStateService } from './services/cw-state.service';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html'
})
export class ChatWidgetComponent {

  constructor(private cws: CwStateService) { }

}
