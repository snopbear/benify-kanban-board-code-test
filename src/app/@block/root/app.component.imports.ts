import { NgClass, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@ui-widgets/header/header.component';
import { SidebarComponent } from '@ui-widgets/sidebar/sidebar.component';


const routerModules = [RouterOutlet];
const commonModules = [NgFor, NgClass];
const components = [SidebarComponent, HeaderComponent];

const appComponentsImports = [
  ...routerModules,
  ...commonModules,
  ...components,
];
export default appComponentsImports;
