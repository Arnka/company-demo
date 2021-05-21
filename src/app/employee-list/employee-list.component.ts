import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
    
    
    <h3>{{errorMsg}}</h3>
    <h2>Employee list</h2>
    <ul class="list-group">
      <li (click)="onSelect(employee)" *ngFor="let employee of employees" class="list-group-item" style="cursor: pointer;">
        {{employee.name}}
      </li>
    </ul>
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

  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                   error => this.errorMsg = error);
  }

  onSelect(employee: any){
    this.router.navigate(['/employees', employee.id]);
  }
}
