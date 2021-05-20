import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header style="text-align:center;">
    <h1>Homepage</h1>
  </header>
  `,
  styles: [ 'h1 { font-size: 30px; font-weight: 200;}']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
