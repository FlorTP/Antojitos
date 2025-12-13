import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  constructor() { }

  estadoPedidos = [
    { name: 'Todos', value: '0' },
    { name: 'Pendiente', value: '1' },
    { name: 'Preparando', value: '2' },
    { name: 'Listo', value: '3' },
    { name: 'Entregado', value: '4' }
  ];

  ngOnInit(): void {
  }

}
