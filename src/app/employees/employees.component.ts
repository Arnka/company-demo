import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  template: `
  <div style="display: flex; flex-grow: grow; justify-content: space-around;">
    <app-employee-list></app-employee-list>
    <app-employee-detail></app-employee-detail>
  </div>
  `,
  styles: []
})
export class EmployeesComponent implements OnInit {

  
  constructor() {

   }

  ngOnInit(): void {
  }

}

