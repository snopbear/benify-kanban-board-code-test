import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

const cdkModules = [DragDropModule];
const formsModules = [FormsModule];
const commonModules = [NgFor, NgClass,NgIf];

const kanbanDashboardComponentsImports = [
  ...cdkModules,
  ...formsModules,
  ...commonModules,
];
export default kanbanDashboardComponentsImports;

