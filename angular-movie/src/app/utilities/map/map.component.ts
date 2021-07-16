import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinateMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
layers: Marker[] = [];

@Input() initialCoordinates: coordinateMap[] = [];
@Output() onSelectedLocation = new EventEmitter<coordinateMap>();
  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude,value.longitude]));
  }

  handleMap(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
   // console.log({latitude, longitude});
   this.layers = [];
    this.layers.push(marker([latitude, longitude]));
    this.onSelectedLocation.emit({latitude, longitude});
  }
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movie' })
    ],
    zoom: 5,
    center: latLng(18.87640218901634, -287.95898526906973)
  };
}
