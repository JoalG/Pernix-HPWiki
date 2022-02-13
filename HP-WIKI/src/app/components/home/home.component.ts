import { Component, OnInit } from '@angular/core';
import { CharactersService } from "../../services/characters.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters!: any[];

  constructor(private api:CharactersService){}

  ngOnInit(): void {
    this.api.getCharacters().subscribe((data)=>{
      this.characters = <any[]>data;
    });
  }

}
