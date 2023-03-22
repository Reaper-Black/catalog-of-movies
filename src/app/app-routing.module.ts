import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from "./auth.guard";
import { NewMoviesComponent } from './components/new-movies/new-movies.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { NewUsersComponent } from './components/new-users/new-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/home' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'movies', component: NewMoviesComponent, canActivate: [AuthGuard] },
  { path: 'edit-movie/:id', component: NewMoviesComponent },
  { path: 'list-movies', component: ListMoviesComponent, canActivate: [AuthGuard] },
  { path: 'create-user', component: NewUsersComponent, canActivate: [AuthGuard] },
  { path: 'list-users', component: ListUsersComponent, canActivate: [AuthGuard] },
  { path: 'edit-user/:id', component: NewUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
