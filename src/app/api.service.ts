import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getUniversity(){
    return this.httpClient.get('http://universities.hipolabs.com/search?country=United+States');
  }
}
