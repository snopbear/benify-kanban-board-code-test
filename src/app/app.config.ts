import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { TaskEffects } from './@core/state/task-store/effects/task.effects';
import { provideState, provideStore } from '@ngrx/store';
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
