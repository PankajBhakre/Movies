import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { CreateGenresComponent } from './genres/create-genres/create-genres.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieTheaterComponent } from './movie-theater/create-movie-theater/create-movie-theater.component';
import { EditMovieTheaterComponent } from './movie-theater/edit-movie-theater/edit-movie-theater.component';
import { IndexMovieTheaterComponent } from './movie-theater/index-movie-theater/index-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'genres',  component: IndexGenresComponent},
  {path: 'genres/create', component: CreateGenresComponent},
  {path: 'genres/edit/:id', component: EditGenresComponent},

  {path: 'actors', component: IndexActorComponent},
  {path: 'actors/create', component: CreateActorComponent},
  {path: 'actors/edit/:id', component: EditActorComponent},

  {path: 'movietheater', component: IndexMovieTheaterComponent},
  {path: 'movietheater/create', component: CreateMovieTheaterComponent},
  {path: 'movietheater/edit/:id', component: EditMovieTheaterComponent},

  {path: 'movies/create', component: CreateMovieComponent},
  {path: 'movies/edit/:id', component: EditMovieComponent},
  {path: 'movies/filter', component: MovieFilterComponent},
  {path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
