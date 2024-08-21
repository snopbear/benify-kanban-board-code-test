import { Component, OnInit } from '@angular/core';
import sidebarComponentsImports from './sidebar.component.imports';

@Component({
  selector: 'benify-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [sidebarComponentsImports],
})
export class SidebarComponent {}
