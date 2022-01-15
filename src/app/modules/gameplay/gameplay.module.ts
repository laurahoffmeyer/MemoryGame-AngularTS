import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { MultiplayertrackerComponent } from './components/multiplayertracker/multiplayertracker.component';
import { SingleplayertrackerComponent } from './components/singleplayertracker/singleplayertracker.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './components/icons/icons.component';
import { EndgamereviewComponent } from './components/endgamereview/endgamereview.component';

@NgModule({
  declarations: [
    HeaderComponent,
    GameboardComponent,
    SingleplayertrackerComponent,
    MultiplayertrackerComponent,
    IconsComponent,
    EndgamereviewComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    GameboardComponent,
    SingleplayertrackerComponent,
    MultiplayertrackerComponent
  ]
})
export class GamePlayModule { }