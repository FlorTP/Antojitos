import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  visible: boolean = false;
  visibleVerPago: boolean = false;
  egresosForm: UntypedFormGroup | any;
  pagosSeleccionados: any[] = [];

  constructor(private fb: UntypedFormBuilder) {

    this.egresosForm = this.fb.group({
      cantidad    : ['', []],
      descripcion : ['', []],
      precio      : ['', []],
      tipo        : ['', []],
    });
  }

  valor = [
    { nombre: 'Parámetro 1', valor: 'Valor 1' },
    { nombre: 'Parámetro 2', valor: 'Valor 2' },
    { nombre: 'Parámetro 3', valor: 'Valor 3' }
  ];

   egresos = [
    { cantidad: 2, descripcion: 'Compra de materiales', precio: 150.00, tipo: 'Materiales' },
    { cantidad: 1, descripcion: 'Pago de servicios', precio: 200.00, tipo: 'Servicios' },
    { cantidad: 3, descripcion: 'Gastos de viaje', precio: 300.00, tipo: 'Viajes' }
  ];

  pedidos = [
  {
    pagos: [
      { hora: '10:05 AM', metodo: 'Efectivo', monto: 15 },
      { hora: '10:10 AM', metodo: 'Yape', monto: 3 }
    ],
    pedidos: [
      { descripcion: 'Pedido 1A', precio: 5, cantidad: 2, total: 10, observaciones: 'Especial' },
      { descripcion: 'Pedido 1B', precio: 8, cantidad: 1, total: 8, observaciones: '' }
    ]
  },

  {
    pagos: [
      { hora: '11:00 AM', metodo: 'Plin', monto: 10 }
    ],
    pedidos: [
      { descripcion: 'Pedido 2A', precio: 3, cantidad: 1, total: 3, observaciones: '' },
      { descripcion: 'Pedido 2B', precio: 2, cantidad: 5, total: 10, observaciones: 'Extra' },
      { descripcion: 'Pedido 2C', precio: 6, cantidad: 2, total: 12, observaciones: '' }
    ]
  },

  {
    pagos: [],
    pedidos: [
      { descripcion: 'Pedido 3A', precio: 7, cantidad: 4, total: 28, observaciones: 'Sin sal' }
    ]
  }
  ];

  asistencias = [
  {
    fecha: '2025-01-10',
    horaIngreso: '08:30',
    horaSalida: '17:45'
  },
  {
    fecha: '2025-01-11',
    horaIngreso: '09:00',
    horaSalida: '18:00'
  },
  {
    fecha: '2025-01-12',
    horaIngreso: '08:15',
    horaSalida: '17:30'
  }
];


  ngOnInit(): void {

  }


  AgregarEgreso() {
debugger
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

  VerPagos(row: any){
    debugger
    console.log(row);
    this.pagosSeleccionados = row.pagos;
    this.visibleVerPago = true;
  }

}
