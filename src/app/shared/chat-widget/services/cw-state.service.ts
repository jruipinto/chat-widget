import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { first, map, tap, concatMap } from 'rxjs/operators';
import { Message } from '../models/message.model';

export interface CwState {
  activeRoute: 'icon' | 'home' | 'chat';
  activeChat: Message[] | null;
  chatsPreview: Message[] | null;
  selectedChatPreview: Message | null;
}

@Injectable({
  providedIn: 'root'
})
export class CwStateService {
  initialState: CwState = {
    activeRoute: 'icon',
    activeChat: null,
    chatsPreview: null,
    selectedChatPreview: null
  };
  state$ = new BehaviorSubject(this.initialState);

  public patchState$ = (patch: Partial<CwState>) => this.state$.pipe(
    first(),
    map(state => {
      console.log('Chat widget state - old:', state);
      console.log('Chat widget state - mutation:', patch);
      this.state$.next({ ...state, ...patch });
    }),
    concatMap(() => this.state$.pipe(
      first(),
      tap(newState => console.log('Chat widget state - new:', newState))
    ))
  )

  public patchState(patch: Partial<CwState>) {
    return this.patchState$(patch).subscribe();
  }

  constructor() { }
}
