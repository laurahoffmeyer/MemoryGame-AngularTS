import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameboardComponent } from './modules/gameplay/components/gameboard/gameboard.component';
import { OptionsComponent } from './modules/gamesetup/components/options/options.component';

const routes: Routes = [
  { path: '', redirectTo: "/setup", pathMatch: "full" },
  { path: 'setup', component: OptionsComponent },
  { path: 'play', component: GameboardComponent },
  { path: '**', component: OptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
