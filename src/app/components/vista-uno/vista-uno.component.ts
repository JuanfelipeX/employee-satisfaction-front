import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-vista-uno',
  templateUrl: './vista-uno.component.html',
  styleUrls: ['./vista-uno.component.css']
})
export class VistaUnoComponent implements OnInit {
  employee: any[] = [];
  query: string = '';

  constructor(private employeeService: EmployeesService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerEmployee();
  }

  onSearch(value: string) {
    if (value && value.length > 3) {
      this.query = value.toLowerCase();
      this.filterEmployee();
    } else {
      this.query = '';
      this.filterEmployee();
    }
  }

  obtenerEmployee() {
    this.employeeService.obtenerEmployees().subscribe(
      (data: any) => {
        this.employee = data;
        this.filterEmployee();
      },
      (error: any) => {
        console.error('Error al obtener los empleados:', error);
      }
    );
  }

  filterEmployee() {
    if (this.query) {
      this.employee = this.employee.filter((person: any) =>
        person.fullName.toLowerCase().includes(this.query)
      );
    }
  }
}
