import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, EmployeeModel } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getEmployees(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeModel[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: ApiResponse<EmployeeModel[]>) => response.data)
    );
  }

  getEmployee(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<ApiResponse<EmployeeModel>>(`https://dummy.restapiexample.com/api/v1/employee/${id}`).pipe(
      map((response: ApiResponse<EmployeeModel>) => response.data)
    );
  }
}
