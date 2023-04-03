import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuard } from "./auth.guard";
import { TokenService } from "./services/token.service";
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment.prod';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { NewMoviesComponent } from './components/new-movies/new-movies.component';
import { NewUsersComponent } from './components/new-users/new-users.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewMoviesComponent } from './components/view-movies/view-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    AboutComponent,
    ListMoviesComponent,
    ListUsersComponent,
    NewMoviesComponent,
    NewUsersComponent,
    HomePageComponent,
    ViewMoviesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
