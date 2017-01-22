import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ChatComponent } from './chat/chat.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [ 
    AppComponent,
    ChatComponent,
    NewsComponent,
    HomeComponent
      ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
