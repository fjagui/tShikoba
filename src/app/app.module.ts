import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateParteComponent } from './Components/create-parte/create-parte.component';
import { ParteDetailsComponent } from './Components/parte-details/parte-details.component';
import { ParteListComponent } from './Components/parte-list/parte-list.component';
import { UpdateParteComponent } from './Components/update-parte/update-parte.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateParteComponent,
    ParteDetailsComponent,
    ParteListComponent,
    UpdateParteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
