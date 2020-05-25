import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Condition } from '../models/condition';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  a = 10;
  employeeList = [];

  employeeFromServiceList: Employee[] = [];
  constructor(private http: HttpClient) { }


  addEmployee(employee) {
    this.employeeList.push(employee);
  }

  getEmployeeByCondition(condition) {

    const params = new HttpParams({fromObject : condition});
    this.http.get<Employee[]>('/workshop-api/api/employee/queryEmployeeByCondition'
    , {params}).subscribe(
      value => {
        this.employeeFromServiceList = value;
        console.warn('queryEmployeeByCondition', value);
      });
  }
}
