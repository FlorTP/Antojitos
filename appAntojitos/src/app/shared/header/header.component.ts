import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menu') menu!: Menu;
  usuario = 'Flor TP';
  usuarioImg = 'assets/img/usuario.png';
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {

     this.items = [
      { label: 'Perfil', icon: 'pi pi-user', command: () => this.onPerfil() },
      { label: 'Cerrar sesión', icon: 'pi pi-sign-out', command: () => this.onLogout() }
    ];
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    console.log('Cerrar sesión');
  }

  onPerfil() {
    console.log('Ver perfil');
  }

  verConfiguracion() {
    console.log('Configuración');
  }

}
