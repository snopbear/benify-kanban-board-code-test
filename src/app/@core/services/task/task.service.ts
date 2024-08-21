import { Injectable, WritableSignal, signal } from '@angular/core';
import { ITask } from '@models/interfaces/task/task';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { INITIAL_TASKS } from 'src/app/@data/initial-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasksSignal: WritableSignal<ITask[]> = signal(INITIAL_TASKS);

  constructor() {}

  // Fetch tasks (initially load tasks from the array)
  fetchTasks(): void {
    this.tasksSignal.set(INITIAL_TASKS);
  }

  // Add a new task
  addTask(task: ITask): Observable<ITask> {
    task.id = Date.now().toString(); // Generating a simple unique ID
    this.tasksSignal.update((tasks) => [...tasks, task]);
    return of(task); // Simulating an HTTP observable
  }

  // Update an existing task
  updateTask(task: ITask): Observable<ITask> {
    this.tasksSignal.update((tasks) =>
      tasks.map((t) => (t.id === task.id ? task : t))
    );
    return of(task); // Simulating an HTTP observable
  }

  // Delete a task by ID
  deleteTask(id: string): Observable<void> {
    this.tasksSignal.update((tasks) => tasks.filter((task) => task.id !== id));
    return of(void 0); // Simulating an HTTP observable
  }

  // Get tasks by status
  getTasksByStatus(status: 'To Do' | 'In Progress' | 'Done'): ITask[] {
    return this.tasksSignal().filter((task) => task.status === status);
  }
}
