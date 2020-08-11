import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentSelectorComponent } from './component-selector/component-selector.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentSelectorComponent,
    StringinterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
