import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDialogHomeComponent } from './chat-dialog-home.component';

describe('ChatDialogHomeComponent', () => {
  let component: ChatDialogHomeComponent;
  let fixture: ComponentFixture<ChatDialogHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDialogHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDialogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
