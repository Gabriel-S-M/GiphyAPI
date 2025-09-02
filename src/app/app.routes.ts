import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./view/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'giph-detail',
    loadComponent: () => import('./view/giph-detail/giph-detail.page').then( m => m.GiphDetailPage)
  },
];
