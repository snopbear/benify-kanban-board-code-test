import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ITask } from '@models/interfaces/task/task';
import * as TaskActions from './../../@core/state/task-store/actions/task.actions';
import * as fromTask from './../../@core/state/task-store/selector/task.selectors';
import kanbanDashboardNGRXComponentsImports from './kanban-board-ngrx.component.imports';
@Component({
  selector: 'app-kanban-board-ngrx',
  templateUrl: './kanban-board-ngrx.component.html',
  styleUrls: ['./kanban-board-ngrx.component.scss'],
  standalone: true,
  imports: [kanbanDashboardNGRXComponentsImports],
})
export class KanbanBoardNgrxComponent {

  
  tasks$: Observable<ITask[]>;
  newTaskTitle: string = '';
  newTaskStatus: string = 'To Do';

  // Added properties for managing task editing
  editingTaskId: string | null = null;

  constructor(private store: Store) {
    this.tasks$ = this.store.select(fromTask.selectAllTasks);
  }

  ngOnInit() {
    this.store.dispatch(TaskActions.loadTasks());
  }

  // Method to start editing a task
  startEditing(task: ITask) {
    this.editingTaskId = task.id;
  }

  // Method to update a task title
  updateTask(task: ITask, newTitle: any) {
    // Extract the value from the input element correctly
    const updatedTitle = newTitle?.value?.trim();

    if (updatedTitle) {
      const updatedTask = { ...task, title: updatedTitle }; // Immutable update
      this.store.dispatch(TaskActions.updateTask({ task: updatedTask }));
      this.editingTaskId = null; // Exit edit mode after update
    } else {
      this.cancelEditing(); // Cancel editing if the title is empty
    }
  }

  // Method to cancel editing a task
  cancelEditing() {
    this.editingTaskId = null;
  }

  addTask() {
    const newTask: ITask = {
      id: '',
      title: this.newTaskTitle,
      status: this.newTaskStatus,
    };
    this.store.dispatch(TaskActions.addTask({ task: newTask }));
    this.newTaskTitle = ''; // Clear the input after adding
  }

  deleteTask(taskId: string) {
    this.store.dispatch(TaskActions.deleteTask({ taskId }));
  }

  onDropTask(
    event: CdkDragDrop<ITask[]>,
    targetStatus: 'To Do' | 'In Progress' | 'Done'
  ) {
    const draggedTask = event.item.data as ITask;
    if (draggedTask.status !== targetStatus) {
      const updatedTask = { ...draggedTask, status: targetStatus };
      this.store.dispatch(TaskActions.updateTask({ task: updatedTask }));
    }
  }

  getTasksByStatus(status: string): Observable<ITask[]> {
    return this.store.select(fromTask.selectTasksByStatus(status));
  }
}
