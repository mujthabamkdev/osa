import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ClassRoomComponent } from './modules/class-room/class-room.component';
import { SharedDataService } from '../app/services/shared-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
