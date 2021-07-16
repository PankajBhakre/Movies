import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {
 form: FormGroup;

 genres= [
   {id:1, name: 'Drama'}, {id:2, name: 'Action'}, {id:3, name: 'Comedy'}
  ]

  movies = [
    {title: 'Spider-Man',price: 340, poster: 'https://m.media-amazon.com/images/M/MV5BOGRlY2ZjMzEtNDNjOC00ZmM4LTkzMjAtNDE5YWUxNWI0ZTI4XkEyXkFqcGdeQXVyNjI2OTgxNzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'},
    {title: 'Moana',price: 440, poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'},
    {title: 'Sherlock @ Home',price: 240, poster: 'https://m.media-amazon.com/images/M/MV5BZjExZDA2ZmQtYThiYi00N2EyLWIzNGYtZmU5Y2QyNjZkMDk2XkEyXkFqcGdeQXVyMjI1MDA1Nzk@._V1_UY268_CR3,0,182,268_AL__QL50.jpg'},
    {title: 'The Mummy',price: 350, poster: 'https://m.media-amazon.com/images/M/MV5BOTJiYjBhZDgtMjhiOC00MTIzLThlNGMtMmI1NjIwM2M3YTI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'},
    {title: 'Hulk',price: 250, poster: 'https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UY268_CR0,0,182,268_AL__QL50.jpg'},
    {title: 'The Thor',price: 400, poster: 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'}
  ]

  originalMovies = this.movies;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    })

    this.form.valueChanges.subscribe(values=> {
      this.movies = this.originalMovies;
      this.filterMovies(values);
    })
  }


  filterMovies(values: any){
    if(values.title){
      this.movies = this.movies.filter(x=>x.title.toLowerCase().indexOf(values.title) != -1)
    }
  } 

  cleanForm(){
    this.form.reset();
  }

}
