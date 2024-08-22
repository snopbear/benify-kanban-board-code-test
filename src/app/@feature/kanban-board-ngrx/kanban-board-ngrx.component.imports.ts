import { DragDropModule } from '@angular/cdk/drag-drop';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

const cdkModules = [DragDropModule];
const formsModules = [FormsModule];
const commonModules = [NgFor, NgClass, NgIf,AsyncPipe];

const kanbanDashboardNGRXComponentsImports = [
  ...cdkModules,
  ...formsModules,
  ...commonModules,
];
export default kanbanDashboardNGRXComponentsImports;
