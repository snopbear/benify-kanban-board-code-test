import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TaskState } from './../reducer/task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

export const selectTasksByStatus = (status: string) =>
  createSelector(selectAllTasks, (tasks) =>
    tasks.filter((task:any) => task.status === status)
  );
