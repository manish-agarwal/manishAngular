import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TagcompComponent } from './tagcomp/tagcomp.component';
import { ArthcompComponent } from './arthcomp/arthcomp.component';
import { ChldcompComponent } from './chldcomp/chldcomp.component';
import { ArthdirDirective } from './arthdir.directive';
import { TabledirDirective } from './tabledir.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { DataServiceService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TagcompComponent,
    ArthcompComponent,
    ChldcompComponent,
    ArthdirDirective,
    TabledirDirective,
    BetterHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
