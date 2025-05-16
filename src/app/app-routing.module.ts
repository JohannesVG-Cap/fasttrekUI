import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeHolidayComponent} from './employee-holiday/employee-holiday.component';
import {EmployeeComponent} from './employee/employee.component';

const routes: Routes = [
  {path: '', component: EmployeeListComponent},
  {path: '{employeeId}/create', component: EmployeeHolidayComponent},
  {path: '{employeeId}/{employeeHolidayId}', component: EmployeeHolidayComponent},
  {path: '{employeeIs}', component: EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
