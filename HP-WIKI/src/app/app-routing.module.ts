import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'character-info/:id', component:CharacterInfoComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
