import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from "../../services/characters.service";

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  character!: any;
  id!:number;

  constructor( private route: ActivatedRoute, private api:CharactersService) { 
    try {
      this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    } catch (error) {
      console.log(error)
    } 
  }

  ngOnInit(): void {
    this.api.getCharacters().subscribe((data)=>{
      this.character = (<any[]>data)[this.id];
    });
  }

}
