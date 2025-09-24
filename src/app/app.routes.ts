import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: Home },
    { path: 'not-found', component: NotFound},
    { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];
