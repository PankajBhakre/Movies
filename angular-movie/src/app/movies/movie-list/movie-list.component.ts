import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
@Input() movies;
  constructor() { }

  ngOnInit(): void { }

  
  remove(index: number){
    this.movies.splice(index,1);
  }
}
