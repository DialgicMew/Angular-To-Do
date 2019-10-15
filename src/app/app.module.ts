import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


import { AppComponent } from "./app.component";
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, FormsModule, BrowserModule, MatCheckboxModule, BrowserAnimationsModule, MatButtonModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
