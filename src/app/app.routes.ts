import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },

  {
    path: 'overview',
    loadComponent: () =>
      import('./@feature/overview/overview.component').then(
        (x) => x.OverviewComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./@feature/dashboard/dashboard.component').then(
        (x) => x.DashboardComponent
      ),
  },

  //   {
  //     path: '**',
  //     loadComponent: () =>
  //       import('./@feature/not-found/not-found.component').then(
  //         (x) => x.NotFoundComponent
  //       ),
  //   },
];
