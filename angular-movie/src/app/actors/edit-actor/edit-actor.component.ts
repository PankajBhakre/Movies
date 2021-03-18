import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(params => {
      alert(params.id);
    })
  }

}