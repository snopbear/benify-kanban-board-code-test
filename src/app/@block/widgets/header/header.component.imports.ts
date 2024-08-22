import { NgFor, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

const routerModules = [RouterLink];
const commonModules = [NgFor, NgClass];
const headerComponentImports = [
  ...routerModules,
  ...commonModules
];
export default headerComponentImports;
