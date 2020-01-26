import { Component, AfterContentInit } from '@angular/core';
import { CwStateService } from './shared/chat-widget/services/cw-state.service';
import { chatsPreview } from './mock-data';
import { filter, tap } from 'rxjs/operators';

// {
//   activeRoute: 'icon',
//   activeChat: null,
//   chatsPreview: null,
//   selectedChatPreview: null
// }

@Component({
  selector: 'app-root',
  template: `<app-chat-widget></app-chat-widget>`
})
export class AppComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    this.cws.patchState({ chatsPreview });
    this.cws.stateMutation$.pipe(
      filter(mutation => typeof mutation.selectedChatPreview !== 'undefined'),
      tap(m => this.cws.patchState({ activeChat: [m.selectedChatPreview] }))
    ).subscribe();
  }
  constructor(private cws: CwStateService) { }
}
