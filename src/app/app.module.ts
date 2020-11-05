import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { WineComponent } from './wine/wine.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { EditWineComponent } from './wine/edit-wine/edit-wine.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    WineComponent,
    HeaderComponent,
    NavbarComponent,
    WineListComponent,
    EditWineComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
