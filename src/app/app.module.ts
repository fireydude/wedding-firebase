import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { DayComponent } from './components/day/day.component';
import { GiftComponent } from './components/gift/gift.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    DayComponent,
    GiftComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'day', pathMatch: 'full' },
      { path: 'day', component: DayComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'gift', component: GiftComponent },
      { path: '**', redirectTo: 'day' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
