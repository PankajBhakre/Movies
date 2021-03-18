import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesInTheater;
  futureReleaseMovie;
  ngOnInit(): void {
    this.moviesInTheater = [{
      title: "Spider-Man",
        releaseDate: new Date(),
        price: 350,
        poster: 'https://m.media-amazon.com/images/M/MV5BOGRlY2ZjMzEtNDNjOC00ZmM4LTkzMjAtNDE5YWUxNWI0ZTI4XkEyXkFqcGdeQXVyNjI2OTgxNzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
      },
      {
        title: "Moana",
        releaseDate: new Date('2020-11-17'),
        price: 250,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
      },
      {
        title: "Sherlock @ Home",
        releaseDate: new Date('2020-11-17'),
        price: 550,
        poster: 'https://m.media-amazon.com/images/M/MV5BZjExZDA2ZmQtYThiYi00N2EyLWIzNGYtZmU5Y2QyNjZkMDk2XkEyXkFqcGdeQXVyMjI1MDA1Nzk@._V1_UY268_CR3,0,182,268_AL__QL50.jpg'
      },
      {
        title: "The Mummy",
        releaseDate: new Date('2020-11-17'),
        price: 450,
        poster: 'https://m.media-amazon.com/images/M/MV5BOTJiYjBhZDgtMjhiOC00MTIzLThlNGMtMmI1NjIwM2M3YTI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
      },
    ]
    this.futureReleaseMovie = [{
      title: "Hulk",
        releaseDate: new Date(),
        price: 350,
        poster:'https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UY268_CR0,0,182,268_AL__QL50.jpg'
      },
      {
        title: "The Thor",
        releaseDate: new Date('2020-11-17'),
        price: 250,
        poster:'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'
      }
    ]
  }

}
