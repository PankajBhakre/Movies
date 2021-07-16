import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { moviesDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  @Input() model: moviesDTO
  constructor(private formbuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {

    this.form = this.formbuilder.group({
      title: ['', Validators.required],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: ''
    })

    if(this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  onSaveChanges(){

  }

  onImageSelected(file: File){
this.form.get('poster').setValue(file);
  }
  changeMarkdown(content: string){
this.form.get('summary').setValue(content);
  }
}
