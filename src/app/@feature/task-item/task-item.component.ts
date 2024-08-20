import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '@models/interfaces/task/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: true,
  imports: []
})
export class TaskItemComponent  {
  @Input() task!: ITask; // Input decorator to receive task data from the parent component

  constructor() {}
}
