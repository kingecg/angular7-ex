import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
// import {MatSidenavModule, MatIconModule,  MatToolbarModule, MatListModule} from '@angular/material'
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './mat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
