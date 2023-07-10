import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  obtenerEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.URL_BASE + 'employees');
  }

  enviarEmployees(data: any) {
    return this.http.post(this.URL_BASE + 'employees', data);
  }

}
