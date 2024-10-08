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
    path: 'dashboard-signals',
    loadComponent: () =>
      import(
        './@feature/kanban-board-signals/kanban-board-signals.component'
      ).then((x) => x.KanbanBoardSignalsComponent),
  },
  {
    path: 'dashboard-ngrx',
    loadComponent: () =>
      import(
        './@feature/kanban-board-ngrx/kanban-board-ngrx.component'
      ).then((x) => x.KanbanBoardNgrxComponent),
  },
    {
      path: '**',
      loadComponent: () =>
        import('./@feature/not-found/not-found.component').then(
          (x) => x.NotFoundComponent
        ),
    },
];
