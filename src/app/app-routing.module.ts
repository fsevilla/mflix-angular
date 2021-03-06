import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from 'src/app/pages/movies/movies.component';
import { Error404Component } from './pages/error404/error404.component';
import { MovieItemComponent } from './pages/movies/movie-item/movie-item.component';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './globals/guards/auth.guard';
import { UnauthGuard } from './globlas/guards/unauth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent, canActivate:[AuthGuard], children: [
    { path: '', component: MoviesListComponent },
    { path: ':movieId', component: MovieItemComponent }
  ] },
  { path: 'signup', component: SignupComponent, canActivate: [UnauthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
