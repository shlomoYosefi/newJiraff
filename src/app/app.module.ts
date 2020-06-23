import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatListComponent } from './comps/cat/cat-list/cat-list.component';
import { CatItemComponent } from './comps/cat/cat-item/cat-item.component';
import { CatDetilsComponent } from './comps/cat/cat-detils/cat-detils.component';
import { AddCatComponent } from './comps/cat/add-cat/add-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatItemComponent,
    CatDetilsComponent,
    AddCatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
