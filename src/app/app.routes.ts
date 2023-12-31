import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDeatilsComponent } from './components/movie-deatils/movie-deatils.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'movie/:id',
        component: MovieDeatilsComponent,
        title: 'Movie Details'
    }
];
