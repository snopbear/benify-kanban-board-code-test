import { Injectable, WritableSignal, signal } from '@angular/core';
import { ITask } from '@models/interfaces/task/task';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { INITIAL_TASKS } from 'src/app/@data/initial-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = INITIAL_TASKS;

  constructor() {}

  // Fetch all tasks
  getAllTasks(): Observable<ITask[]> {
    return of(this.tasks);
  }

  // Add a new task
  addTask(task: ITask): Observable<ITask> {
    task.id = Date.now().toString(); // Generate a simple unique ID
    this.tasks.push(task);
    return of(task); // Simulate an HTTP observable
  }

  // Update an existing task
  updateTask(task: ITask): Observable<ITask> {
    this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t));
    return of(task); // Simulate an HTTP observable
  }

  // Delete a task by ID
  deleteTask(id: string): Observable<void> {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return of(void 0); // Simulate an HTTP observable
  }

  // Get tasks by status
  getTasksByStatus(status: any): ITask[] {
    return this.tasks.filter((task) => task.status === status);
  }
}
