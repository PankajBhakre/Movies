import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent implements OnInit {

  constructor(private activated: ActivatedRoute) { }
  model : GenreCreationDTO = {name : 'Drama'};



  ngOnInit(): void {
    this.activated.params.subscribe(param => {
      alert(param.id);
    })
  }

  saveChanges(value: GenreCreationDTO){
    
  }
}
