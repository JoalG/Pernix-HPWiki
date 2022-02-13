import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterCardComponent,
    NavbarComponent,
    CharacterInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
