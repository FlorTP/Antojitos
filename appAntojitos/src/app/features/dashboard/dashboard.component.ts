import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AsistenciaService } from 'src/app/core/services/asistencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  visible: boolean = false;
  visibleVerPago: boolean = false;
  egresosForm: UntypedFormGroup | any;
  pagosSeleccionados: any[] = [];
  registroSesionTurno: any;
  activeIndex: number = 0;
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private AsistenciaService: AsistenciaService
  ) {
    this.egresosForm = this.fb.group({
      cantidad: ['', []],
      descripcion: ['', []],
      precio: ['', []],
      tipo: ['', []],
    });
  }

  valor = [
    { nombre: 'Parámetro 1', valor: 'Valor 1' },
    { nombre: 'Parámetro 2', valor: 'Valor 2' },
    { nombre: 'Parámetro 3', valor: 'Valor 3' },
  ];

  egresos = [
    {
      cantidad: 2,
      descripcion: 'Compra de materiales',
      precio: 150.0,
      tipo: 'Materiales',
    },
    {
      cantidad: 1,
      descripcion: 'Pago de servicios',
      precio: 200.0,
      tipo: 'Servicios',
    },
    {
      cantidad: 3,
      descripcion: 'Gastos de viaje',
      precio: 300.0,
      tipo: 'Viajes',
    },
  ];

  pedidos = [
    {
      pagos: [
        { hora: '10:05 AM', metodo: 'Efectivo', monto: 15 },
        { hora: '10:10 AM', metodo: 'Yape', monto: 3 },
      ],
      pedidos: [
        {
          descripcion: 'Pedido 1A',
          precio: 5,
          cantidad: 2,
          total: 10,
          observaciones: 'Especial',
        },
        {
          descripcion: 'Pedido 1B',
          precio: 8,
          cantidad: 1,
          total: 8,
          observaciones: '',
        },
      ],
    },

    {
      pagos: [{ hora: '11:00 AM', metodo: 'Plin', monto: 10 }],
      pedidos: [
        {
          descripcion: 'Pedido 2A',
          precio: 3,
          cantidad: 1,
          total: 3,
          observaciones: '',
        },
        {
          descripcion: 'Pedido 2B',
          precio: 2,
          cantidad: 5,
          total: 10,
          observaciones: 'Extra',
        },
        {
          descripcion: 'Pedido 2C',
          precio: 6,
          cantidad: 2,
          total: 12,
          observaciones: '',
        },
      ],
    },

    {
      pagos: [],
      pedidos: [
        {
          descripcion: 'Pedido 3A',
          precio: 7,
          cantidad: 4,
          total: 28,
          observaciones: 'Sin sal',
        },
      ],
    },
  ];

  asistencias: any;

  ngOnInit(): void {}

  onTabChange(event: any) {
    debugger;
    if (event.index === 3) {
      this.listarFechasRegistros(localStorage.getItem('idSesion')!);
    }
  }

  AgregarEgreso() {
    this.visible = true;
  }

  guardarParametros() {
    console.log('Parámetros actualizados:', this.valor);
  }

  onSubmit(): void {
    if (this.egresosForm.valid) {
      const param = {
        // Obtener los valores del formulario
      };

      console.log('Formulario enviado:', param);
      this.visible = false;
    }
  }

  VerPagos(row: any) {
    debugger;
    console.log(row);
    this.pagosSeleccionados = row.pagos;
    this.visibleVerPago = true;
  }

  btn_registrar() {

    Swal.fire({
      title: 'Procesando...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    var datos = localStorage.getItem('res')!;

    const param = {
      idUsuario: datos,
    };

    this.AsistenciaService.registrarSalida(param).subscribe({
      next: (res) => {
        console.log('Salida registrada:', res);

        const idSesionTurno = res.idSesionTurno;
        this.listarFechasRegistros(idSesionTurno);
        Swal.close();
      },
      error: (err) => console.error(err),
      complete: () => Swal.close()
    });
  }

  listarFechasRegistros(idSesionTurno: string) {
    const idUsuario = localStorage.getItem('res');

    if (idUsuario) {
      this.AsistenciaService.listarfinHorarios({
        idUsuario: idUsuario,
      }).subscribe({
        next: (res) => {
          const registroSeleccionado = res.registros.find(
            (r: any) => r.idSesionTurno.toString() === idSesionTurno.toString()
          );

          if (registroSeleccionado) {
            this.registroSesionTurno = registroSeleccionado;
          }

          //listar tabla

          this.asistencias = res.registros;
        },
        error: (err) => console.error(err),
      });
    }
  }
}
