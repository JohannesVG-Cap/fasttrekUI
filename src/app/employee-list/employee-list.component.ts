import { Component } from '@angular/core';
import {EmployeeListService} from './employee-list.service';
import {Employee} from '../dto/employee';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employeeListService: EmployeeListService = new EmployeeListService();

  employeeList: Employee[] = [];

  constructor() {
    this.employeeListService.getAllEmployees().subscribe(
      {next: value => this.employeeList = value}
    )
  }


}
