import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorsCreationDTO } from '../actors.model';


@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  @Input() model: actorsCreationDTO;
  form: FormGroup;
  @Output() onSaveChanges = new EventEmitter<actorsCreationDTO>();


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
this.form = this.fb.group({
  name: ['', Validators.required],
  dateOfBirth: '',
  picture: '',
  biography:''
});
if(this.model != undefined){
  this.form.patchValue(this.model);
}
  }

  changeMarkdown(content){
this.form.get('biography').setValue(content);
  }
  saveChanges(){
this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(image){
this.form.get('picture').setValue(image);
  }
}
