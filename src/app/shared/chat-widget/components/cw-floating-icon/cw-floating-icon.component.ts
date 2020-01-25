import { Component } from '@angular/core';

@Component({
  selector: 'app-cw-floating-icon',
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M22 2H2.01L2 22l4-4h16V2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
  </svg>
  `,
  styleUrls: ['./cw-floating-icon.component.scss']
})
export class CwFloatingIconComponent {
}
