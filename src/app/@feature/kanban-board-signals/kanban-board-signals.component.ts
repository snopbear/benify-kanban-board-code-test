import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TaskService } from '@services/task/task.service';
import { ITask } from '@models/interfaces/task/task';
import kanbanDashboardComponentsImports from './kanban-board-signals.component.imports';

@Component({
  selector: 'benify-kanban-board-signals',
  templateUrl: './kanban-board-signals.component.html',
  styleUrls: ['./kanban-board-signals.component.scss'],
  standalone: true,
  imports: [kanbanDashboardComponentsImports],
})
export class KanbanBoardSignalsComponent {

  editingTaskId: string | null = null;
  savingTaskId: string | null = null;
  newTaskTitle: string = '';
  newTaskStatus: string = 'To Do';

  constructor(public taskService: TaskService) {}

  startEditing(task: ITask) {
    this.editingTaskId = task.id;
  }

  saveTask(task: ITask, eventTarget: EventTarget | null) {
    const inputElement = eventTarget as HTMLInputElement;
    if (inputElement && inputElement instanceof HTMLInputElement) {
      const newTitle = inputElement.value.trim();

      if (newTitle) {
        task.title = newTitle;
        this.taskService.updateTask(task).subscribe(() => {
          this.editingTaskId = null; // Exit edit mode after update
        });
      } else {
        this.cancelEditing();
      }
    }
  }

  cancelEditing() {
    if (this.savingTaskId !== this.editingTaskId) {
      this.editingTaskId = null;
    }
  }

  onSaveClick(task: ITask, eventTarget: EventTarget | null) {
    this.savingTaskId = task.id;
    this.saveTask(task, eventTarget);
  }

  addTask(title: string, status: any): void {
    if (title.trim()) {
      const newTask: ITask = { id: '', title, status };
      this.taskService.addTask(newTask).subscribe(() => {
        this.newTaskTitle = '';
        this.newTaskStatus = 'To Do'; 
      });
    }
  }

  getTasksByStatus(status: any): ITask[] {
    return this.taskService.getTasksByStatus(status);
  }

  deleteTask(task: ITask): void {
    this.taskService.deleteTask(task.id).subscribe();
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
