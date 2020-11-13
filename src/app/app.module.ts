import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieItemComponent } from './pages/movies/movie-item/movie-item.component';
import { Error404Component } from './pages/error404/error404.component';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { SignupComponent } from './pages/signup/signup.component';

import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

import { GridListModule } from './modules/grid-list/grid-list.module';
import { HeaderComponent } from './layout/header/header.component';
import { AnchorClickDirective } from './globals/directives/anchor-click.directive';
import { CancelSubmitDirective } from './globals/directives/cancel-submit.directive';
import { PosterUrlDirective } from './globals/directives/poster-url.directive';
import { MxDatePipe } from './globals/pipes/mx-date.pipe';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieItemComponent,
    Error404Component,
    MoviesListComponent,
    SignupComponent,
    HeaderComponent,
    AnchorClickDirective,
    CancelSubmitDirective,
    PosterUrlDirective,
    MxDatePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GridListModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
