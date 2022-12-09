export interface EmployeeModel {
  readonly id: string;
  readonly employee_name: string;
  readonly employee_salary: string;
  readonly employee_age: string;
  readonly profile_image: string;
}

export interface ApiResponse<T> {
  status: string;
  data: T
}
