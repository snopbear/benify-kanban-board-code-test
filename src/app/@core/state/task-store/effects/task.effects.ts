import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap, exhaustMap } from 'rxjs/operators';
import { TaskService } from '@services/task/task.service';
import * as TaskActions from './../actions/task.actions';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      exhaustMap(() =>
        this.taskService.getAllTasks().pipe(
          map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
          catchError(() => of({ type: '[Task] Load Tasks Failed' }))
        )
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      concatMap((action) =>
        this.taskService.addTask(action.task).pipe(
          map((task) => ({ type: '[Task] Add Task Success', task })),
          catchError(() => of({ type: '[Task] Add Task Failed' }))
        )
      )
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.updateTask),
      concatMap((action) =>
        this.taskService.updateTask(action.task).pipe(
          map((task) => ({ type: '[Task] Update Task Success', task })),
          catchError(() => of({ type: '[Task] Update Task Failed' }))
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      mergeMap((action) =>
        this.taskService.deleteTask(action.taskId).pipe(
          map(() => ({
            type: '[Task] Delete Task Success',
            taskId: action.taskId,
          })),
          catchError(() => of({ type: '[Task] Delete Task Failed' }))
        )
      )
    )
  );
}
