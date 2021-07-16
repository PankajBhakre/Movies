import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinateMap } from 'src/app/utilities/map/coordinate';
import { MovieTheaterCreationDTO, MovieTheaterDTO } from '../movie-theater.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {
form: FormGroup;
@Output() onSaveChanges = new EventEmitter<MovieTheaterCreationDTO>();
@Input() model : MovieTheaterDTO;

initialCoordinates: coordinateMap[] = [];
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required]
    })

    if(this.model != undefined) {
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude})
    }
  }

  SaveChanges(){
this.onSaveChanges.emit(this.form.value);
  }

  onSelectedLocation(coordinates: coordinateMap){
this.form.patchValue(coordinates);
  }
}
