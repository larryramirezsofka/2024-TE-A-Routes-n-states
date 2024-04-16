import { Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { ErrorComponent } from './components/error/error.component';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: UserComponent,
                outlet: 'main'
            }
        ]
    },
    {
        path: 'games',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: GamesComponent,
                outlet: 'main'
            }
        ]
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
