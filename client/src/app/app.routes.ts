import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        
        path: '',
        redirectTo: 'publicaciones',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login').then((archivo) => archivo.Login),
    },
    {
        path: 'registro',
        loadComponent: () =>
            import('./pages/registro/registro').then((archivo) => archivo.Registro),
    },
    {
        path: 'publicaciones',
        loadComponent: () =>
            import('./pages/publicaciones/publicaciones').then((archivo) => archivo.Publicaciones),
    },
    {
        path: 'miperfil',
        loadComponent: () =>
            import('./pages/miperfil/miperfil').then((archivo) => archivo.Miperfil),
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/error/error').then((archivo) => archivo.Error),
    }
];