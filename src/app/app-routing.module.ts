import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent },
  { path: 'news', component: NewsComponent },
  { path: 'home', component: HomeComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes, { useHash: true } ),
  ],
  providers: [ ],
  declarations: [ ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {}
