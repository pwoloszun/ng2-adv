import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { LayoutModule } from "./layout/layout.module";
import { DbService } from "./shared/db.service";
import { HomeModule } from "./home/home.module";
import { appReducer } from "./app.reducer";
import { SharedModule } from "./shared/shared.module";
import { BookModule } from "./book";
import { ForumModule } from "./forum";
import { CounterComponent } from "./about/counter/counter.component";
import { AsyncCounterComponent } from "./about/async-counter/async-counter.component";
import { AsyncCounterEffects } from "./about/async-counter/shared/async-counter.effects";
import { AsyncCounterApiService } from "./about/async-counter/shared/async-counter-api.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,

    //ngrx
    StoreModule.provideStore(appReducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

//effects
    EffectsModule.run(AsyncCounterEffects), //TODO

    //app
    SharedModule,
    LayoutModule,
    HomeModule,
    BookModule,
    ForumModule,
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    CounterComponent,
    AsyncCounterComponent,
  ],
  providers: [
    DbService,
    AsyncCounterApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
