import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() character!: any;
  @Input() id!: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToCharacterInfo(id:number){
    this.router.navigate(['/character-info', id]);
  }

}
