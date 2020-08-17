import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentSelectorComponent } from './component-selector/component-selector.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { NgforNgifComponent } from './ngfor-ngif/ngfor-ngif.component';
import {BasicHighlightDirective} from './basic-highlight/basic.highlight.directive';
import { RendDirective } from './rend/rend.directive';








@NgModule({
  declarations: [
    AppComponent,
    ComponentSelectorComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    NgforNgifComponent,
    BasicHighlightDirective,
    RendDirective,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
