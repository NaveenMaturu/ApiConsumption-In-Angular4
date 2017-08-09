import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { AppComponent } from './app.component';
import {MdCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule,
	MaterialModule,
	MdIconModule,
	MdCardModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
