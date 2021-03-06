
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  API_URL = 'https://hp-api.herokuapp.com/api/characters';

  constructor(
    private http:HttpClient
  ) { }

  getCharacters(){
    return this.http.get(this.API_URL);
  }

}