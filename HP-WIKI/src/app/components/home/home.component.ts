import { Component, OnInit } from '@angular/core';
import { CharactersService } from "../../services/characters.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters!: any[];
  page_number: number = 1;
  itemsPerPage: number = 18;

  constructor(private api:CharactersService){}

  ngOnInit(): void {
    this.api.getCharacters().subscribe((data)=>{
      this.characters = <any[]>data;
    });
  }

  calcCardId(id:number){
    return ((this.page_number-1)*this.itemsPerPage)+id
  }

  scroll(el: string) {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
