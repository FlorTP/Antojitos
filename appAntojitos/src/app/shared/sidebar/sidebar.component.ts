import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[] = [];
  activeItem: string | null = null;

  items2: MenuItem[];
  selectedItem: MenuItem | undefined;

  constructor() {
    this.items2 = [
      { label: 'Opción 1', command: (event) => this.selectItem(event.item) },
      { label: 'Opción 2', command: (event) => this.selectItem(event.item) },
      // ...
    ];
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: ['/dashboard']
      },
      {
        label: 'Pedidos',
        icon: 'pi pi-users',
        routerLink: ['/mesas'],
      },
      {
        label: 'Reportes',
        icon: 'pi pi-chart-bar',
        routerLink: ['/reportes']
      }
    ];
  }

  setActive(label: string) {
    this.activeItem = label;
  }
  selectItem(item: MenuItem) {
    this.selectedItem = item;
    // Lógica adicional para tu aplicación
  }

  getStyleClass(item: MenuItem): string {
    return this.selectedItem === item ? 'mi-elemento-seleccionado' : '';
  }

}
