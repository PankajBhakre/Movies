import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieTheaterCreationDTO, MovieTheaterDTO } from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

 model: MovieTheaterDTO = {name: 'Mumbai',latitude:18.87640218901634 , longitude: -287.95898526906973};

  constructor(private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(param => {
      alert(param.id);
    })
  }
  saveChanges(movieTheater: MovieTheaterCreationDTO) {

  }
}
