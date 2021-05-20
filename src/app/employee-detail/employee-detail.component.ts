import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CountryService } from '../country.service'; 

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <h3>{{errorMsg}}</h3>
    <div class="container-fluid">
      <form>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control">
        </div>

        <div class="form-group">
          <label>ID</label>
          <input type="text" class="form-control">
        </div>

        <div class="form-group">
          <label>Age</label>
          <input type="text" class="form-control">
        </div>

        <div class="form-group">
          <label>Country</label>
          <select class="form-control">
            <option *ngFor="let country of countries" [value]="country.name">{{country.name}}</option>
          </select>
        </div>

        <button class="btn btn-primary" type="submit">Update</button>

      </form>
    </div>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [] as any;
  public errorMsg: any;
  public countries = [] as any;
 

  constructor(private _employeeService: EmployeeService, private _countryService: CountryService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                   error => this.errorMsg = error);
    this._countryService.getCountries()
                   .subscribe(data => this.countries = data,
                    error => this.errorMsg = error);

  }

}
