import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ITask } from '@models/interfaces/task/task';
import { INITIAL_TASKS } from 'src/app/@data/initial-tasks'; // Adjust path as needed

@Injectable({
  providedIn: 'root',
})
export class TaskNgrxService {
  private tasks: ITask[] = INITIAL_TASKS;

  constructor() {}

  // Fetch tasks
  fetchTasks(): Observable<ITask[]> {
    return of(this.tasks).pipe(delay(500)); // Simulate network delay
  }

  // Add a new task
  addTask(task: ITask): Observable<ITask> {
    task.id = Date.now().toString(); // Generate a simple unique ID
    this.tasks = [...this.tasks, task];
    return of(task).pipe(delay(500)); // Simulate network delay
  }

  // Update an existing task
  updateTask(task: ITask): Observable<ITask> {
    this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t));
    return of(task).pipe(delay(500)); // Simulate network delay
  }

  // Delete a task by ID
  deleteTask(id: string): Observable<void> {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return of(void 0).pipe(delay(500)); // Simulate network delay
  }

  // Get tasks by status
  getTasksByStatus(status: 'To Do' | 'In Progress' | 'Done'): ITask[] {
    return this.tasks.filter((task) => task.status === status);
  }
}
