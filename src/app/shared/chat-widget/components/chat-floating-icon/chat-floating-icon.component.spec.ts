import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFloatingIconComponent } from './chat-floating-icon.component';

describe('ChatFloatingIconComponent', () => {
  let component: ChatFloatingIconComponent;
  let fixture: ComponentFixture<ChatFloatingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFloatingIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFloatingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
