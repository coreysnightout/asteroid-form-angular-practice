import { Component } from '@angular/core';
import { AsteroidServiceService } from '../asteroid-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nasa-form',
  templateUrl: './nasa-form.component.html',
  styleUrls: ['./nasa-form.component.css'],
  providers: [ AsteroidServiceService ]
})
export class NasaFormComponent {
  asteroids: any[]=null;
  date: string = null;

  constructor(private router: Router, private asteroidsService: AsteroidServiceService) { }

  saveRoids(startDate: string, endDate: string) {
    this.asteroidsService.getAsteroidsByDateRange(startDate, endDate).subscribe(response => {
      this.asteroids = response.json();//this gives us the whole response in json form
      console.log(response.json().near_earth_objects[this.date]);
    })
  }

  saveDate(date) {
    this.date = date;
  }

}
