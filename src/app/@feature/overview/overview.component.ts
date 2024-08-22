import { Component } from '@angular/core';
import overviewComponentsImports from './overview.component.imports';

@Component({
  selector: 'app-home',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  standalone: true,
  imports: [overviewComponentsImports],
})
export class OverviewComponent {
  constructor() {}
}
