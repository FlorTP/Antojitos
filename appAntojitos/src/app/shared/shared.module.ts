import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AvatarModule } from "primeng/avatar";
import { MenuModule } from "primeng/menu";
import { PanelMenuModule } from 'primeng/panelmenu';

const COMPONENTS = [
  SidebarComponent,
  HeaderComponent
];


@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    AvatarModule,
    MenuModule,
    PanelMenuModule
],
  exports: [COMPONENTS]
})
export class SharedModule { }
