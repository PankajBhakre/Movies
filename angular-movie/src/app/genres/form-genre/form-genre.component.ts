import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstLetterUppercase } from 'src/app/Validators/firstLetterUppercase';
import { GenreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  form: FormGroup;
 @Output() onSaveChanges: EventEmitter<GenreCreationDTO> = new EventEmitter<GenreCreationDTO>();
 @Input() model: GenreCreationDTO;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',(Validators.required, Validators.minLength(3), FirstLetterUppercase())]
    })
    if(this.model != undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
this.router.navigate(['/genres']);
  }

  getErrorMessageFieldName(){
    const field = this.form.get('name');

    if(field.hasError('required')){
      return 'The name field is required'
    }
    if (field.hasError('minlength')){
      return 'Minimum 3 letters are required'
    }

    if(field.hasError('FirstLetterUppercase')){
      return field.getError('FirstLetterUppercase').message;
    }
    
      return '';
  
  }

}
