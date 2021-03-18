import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenresComponent } from './genres/create-genres/create-genres.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMovieTheaterComponent } from './movie-theater/index-movie-theater/index-movie-theater.component';
import { CreateMovieTheaterComponent } from './movie-theater/create-movie-theater/create-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { EditMovieTheaterComponent } from './movie-theater/edit-movie-theater/edit-movie-theater.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenresComponent,
    IndexActorComponent,
    CreateActorComponent,
    IndexMovieTheaterComponent,
    CreateMovieTheaterComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditGenresComponent,
    EditMovieTheaterComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
