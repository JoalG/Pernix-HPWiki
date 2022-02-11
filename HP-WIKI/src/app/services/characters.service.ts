
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  API_URL = 'http://hp-api.herokuapp.com/api/characters';

  constructor(
    private http:HttpClient
  ) { }

  apiCall(){
    return this.http.get(this.API_URL)
  }

}