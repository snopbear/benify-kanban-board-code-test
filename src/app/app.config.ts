import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { TaskEffects } from './@core/state/task-store/effects/task.effects';
import { taskReducer } from './@core/state/task-store/reducer/task.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore(),
    provideEffects([TaskEffects]),
    provideState({ name: 'tasks', reducer: taskReducer })
  ],
};
