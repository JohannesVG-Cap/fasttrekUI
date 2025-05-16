import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../dto/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  private http = inject(HttpClient);

  constructor() { }

  public getAllEmployees() {
    return this.http.get<Employee[]>('localhost:8080/holidays');
  }
}
