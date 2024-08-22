import { createAction, props } from '@ngrx/store';
import { ITask } from '@models/interfaces/task/task';

export const loadTasks = createAction('[Task] Load Tasks');

export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: ITask[] }>()
);

export const addTask = createAction(
  '[Task] Add Task',
  props<{ task: ITask }>()
);

export const updateTask = createAction(
  '[Task] Update Task',
  props<{ task: ITask }>()
);

export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ taskId: string }>()
);
