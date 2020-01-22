import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDialogConversationComponent } from './chat-dialog-conversation.component';

describe('ChatDialogConversationComponent', () => {
  let component: ChatDialogConversationComponent;
  let fixture: ComponentFixture<ChatDialogConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDialogConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDialogConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
