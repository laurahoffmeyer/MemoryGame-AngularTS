import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamePlayModule } from './modules/gameplay/gameplay.module';
import { GameSetupModule } from './modules/gamesetup/gamesetup.modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    GamePlayModule,
    GameSetupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }