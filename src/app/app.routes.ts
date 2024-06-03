import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'details/:id',
        component: MovieInfoComponent,
        title: 'Movie Details',
    }
];
