import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { TaskService } from '@services-common/task/task.service';
import { ITask } from '@models/interfaces/task/task';
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
  standalone: true,
  imports: [DragDropModule, FormsModule, NgFor, JsonPipe, NgClass, NgIf],
})
export class KanbanBoardComponent {
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
    debugger
    if (title.trim()) {
      const newTask: ITask = { id:'', title, status };
      this.taskService.addTask(newTask).subscribe();
      this.newTaskTitle = ''; // Clear the input after adding
      this.newTaskStatus = 'To Do'; // Reset the select box
      
    }
  }

  getTasksByStatus(status:any): ITask[] {
    return this.taskService
      .tasksSignal()
      .filter((task) => task.status === status);
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
