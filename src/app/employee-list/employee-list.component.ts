import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    
    <img src="assets/img/employee.png">
    <h3>{{errorMsg}}</h3>
    <h2>Employee list</h2>
    <div class="list-group" *ngFor="let employee of employees">
      <a href="#" class="list-group-item">Employee {{employee.id}}</a>
    </div> 
  `,
  styles: [ `
    img{
      width: 350px;
      height: auto;
    }
    `
  ]
})
export class EmployeeListComponent implements OnInit {

  public employees = [] as any;
  public errorMsg: any;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                   error => this.errorMsg = error);
  }

}
