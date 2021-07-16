import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstLetterUppercase } from 'src/app/Validators/firstLetterUppercase';
import { GenreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-create-genres',
  templateUrl: './create-genres.component.html',
  styleUrls: ['./create-genres.component.css']
})
export class CreateGenresComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  saveChanges(value: GenreCreationDTO){
    console.log(value);
this.router.navigate(['/genres']);
  }

}
