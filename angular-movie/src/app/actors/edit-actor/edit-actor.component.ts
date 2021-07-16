import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorDTO, actorsCreationDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activated: ActivatedRoute) { }

  model: actorDTO = {name:'Tom Holland', dateOfBirth : new Date(),
   picture: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL__QL50.jpg',
   biography: 'Star' }

  ngOnInit(): void {
    this.activated.params.subscribe(params => {
      alert(params.id);
    })
  }

  saveChanges(actorsCreationDTO  : actorsCreationDTO){
    console.log(actorsCreationDTO);
  }

}
