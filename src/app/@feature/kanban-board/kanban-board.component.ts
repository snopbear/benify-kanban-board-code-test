import { Component, OnInit, Signal } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskService } from '@services-common/task/task.service';
import { ITask } from '@models/interfaces/task/task';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
  standalone: true,
  imports: [DragDropModule, NgFor, JsonPipe],
})
export class KanbanBoardComponent {
  constructor(public taskService: TaskService) {}

  // getTasksByStatus(status: 'To Do' | 'In Progress' | 'Done'): ITask[] {
  //   return this.taskService
  //     .tasksSignal()
  //     .filter((task) => task.status === status);
  // }

  addTask(task: ITask): void {
    this.taskService.addTask(task).subscribe();
  }

  updateTask(task: ITask): void {
    this.taskService.updateTask(task).subscribe();
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe();
  }

  // onDropTask(
  //   event: CdkDragDrop<ITask[]>,
  //   targetStatus: 'To Do' | 'In Progress' | 'Done'
  // ): void {
  //   debugger
  //   console.log('Drop event:', event);
  //   console.log('Target status:', targetStatus);

  //   // Ensure event.item.data is correct
  //   const draggedTask = event.item.data as ITask;
  //   console.log('Dragged task:', draggedTask);

  //   if (draggedTask.status !== targetStatus) {
  //     draggedTask.status = targetStatus;
  //     // this.updateTask(draggedTask).subscribe(() => {
  //     //   console.log('Task status updated successfully');
  //     // });
  //   }
  // }


  getTasksByStatus(status: 'To Do' | 'In Progress' | 'Done'): ITask[] {
    return this.taskService
      .tasksSignal()
      .filter((task) => task.status === status);
  }

  onDropTask(
    event: CdkDragDrop<ITask[]>,
    targetStatus: 'To Do' | 'In Progress' | 'Done'
  ): void {
    const draggedTask = event.item.data as ITask;

    if (draggedTask.status !== targetStatus) {
      draggedTask.status = targetStatus;
      this.taskService.updateTask(draggedTask).subscribe(() => {
        console.log('Task status updated successfully');
      });
    }
  }
}