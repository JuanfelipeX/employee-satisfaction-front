import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TramosService } from 'src/app/services/employees/tramos.service';

@Component({
  selector: 'app-vista-uno',
  templateUrl: './vista-uno.component.html',
  styleUrls: ['./vista-uno.component.css']
})
export class VistaUnoComponent implements OnInit {
  fechaInicial!: string;
  fechaFinal!: string;
  historia!: any[];

  constructor(
    private tramoService: TramosService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  /*
************************************************
*               Historico Tramos               *
************************************************
*/
  obtenerTramos() {
    if (this.fechaInicial && this.fechaFinal) {
      this.tramoService.historicoTramo({ fechaInicial: this.fechaInicial, fechaFinal: this.fechaFinal }).subscribe(
        (data: any) => {
          this.historia = data;
        },
        (error: any) => {
          console.error('Error al obtener la historia:', error);
          this.historia = [];
        }
      );
    }
  }
}
