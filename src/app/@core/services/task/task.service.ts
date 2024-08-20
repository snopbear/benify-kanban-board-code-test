import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ITask } from '@models/interfaces/task/task';



@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:3000/tasks';
 tasksSignal: WritableSignal<ITask[]> = signal([]);

  constructor(private http: HttpClient) {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.http
      .get<ITask[]>(this.baseUrl)
      .subscribe((data) => this.tasksSignal.set(data));
  }

  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.baseUrl, task).pipe(
      tap((newTask) => {
        debugger;
        // Update the signal with the newly added product
        this.tasksSignal.update((tasks) => [...tasks, newTask]);
      })
    );
  }

  updateTask(task: ITask): Observable<ITask> {
    return this.http.put<ITask>(`${this.baseUrl}/${task.id}`, task).pipe(
      tap((updatedTask) => {
        debugger;
        this.tasksSignal.update((tasks) =>
          tasks.map((p) => (p.id === updatedTask.id ? updatedTask : p))
        );
      })
    );
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        // Update the signal to remove the deleted product
        this.tasksSignal.update((tasks) =>
          tasks.filter((task) => task.id !== id)
        );
      })
    );
  }

}
