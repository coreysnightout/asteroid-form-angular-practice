import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nasa-list',
  templateUrl: './nasa-list.component.html',
  styleUrls: ['./nasa-list.component.css']
})
export class NasaListComponent {

  @Input() childAsteroids;//this is an array of asteroids from the service, fed to this child component by the rover component

  constructor() { }

}
