import { Injectable } from '@angular/core';
import { apiKey } from './api-keys';
import { Http, Response } from '@angular/http';

@Injectable()
export class AsteroidServiceService {

  constructor(private http: Http) {}

  getAsteroidsByDateRange(startDate: string, endDate: string) {
    return this.http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + startDate + '&end_date=' + endDate + '&api_key=' + apiKey);
  }

}
