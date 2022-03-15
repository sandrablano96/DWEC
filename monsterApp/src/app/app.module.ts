import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonsterCComponent } from './monster-c/monster-c.component';
import { MonsterDataServiceService } from './monster-data-service.service';

import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterCComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MonsterDataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


