import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message.model';

interface CwState {
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

  constructor() { }
}
