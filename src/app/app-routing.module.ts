import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/*
const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full'}, 
  { path: 'employees', component: EmployeesComponent},
  { path: 'employees/:id', component: EmployeeDetailComponent},
  { path: 'departments', component: DepartmentComponent},
  { path: "**", component: PageNotFoundComponent}
];
*/

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full'}, 
  { path: 'employees',
    component: EmployeesComponent,
    children: [
      {
        path: ':id',
        component: EmployeeDetailComponent
      },
    ]
  },
  { path: 'departments', component: DepartmentComponent},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeesComponent,
                                  EmployeeDetailComponent,
                                  DepartmentComponent,
                                  PageNotFoundComponent]