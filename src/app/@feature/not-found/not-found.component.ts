import { Component, OnInit } from '@angular/core';
import notFoundComponentsImports from './not-found.component.imports';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [notFoundComponentsImports],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
