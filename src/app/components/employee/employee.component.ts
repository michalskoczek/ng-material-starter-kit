import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, Subject, switchMap} from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  styleUrls: ['./employee.component.scss'],
  templateUrl: './employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
  readonly employees$: Observable<EmployeeModel[]> = this._employeeService.getEmployees();
  private _selectedEmployeeSubject: Subject<string> = new Subject<string>();
  public selectedEmployee$: Observable<string> = this._selectedEmployeeSubject.asObservable();
  readonly details$: Observable<EmployeeModel> = this.selectedEmployee$.pipe(switchMap(data => this._employeeService.getEmployee(data)));

  constructor(private _employeeService: EmployeeService) {
  }

  selectEmployee(id: string): void {
    this._selectedEmployeeSubject.next(id);
  }
}
