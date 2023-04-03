import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private URL = 'http://localhost:3000/movie-header'
  private URL = 'https://backend-production-4ddd.up.railway.app/movie-header'
  public currentUser;

  constructor(
    private http: HttpClient,
    private router: Router
    ) {
      this.currentUser = (localStorage.getItem('rol'));
    }

  signUp(user: any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user: any) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  obtainUser(){
    return !!localStorage.getItem('correo');
  }

  obtainRole(){
    const rol = localStorage.getItem('rol');
    console.log('funcion obtainRole: ', rol)
    return rol
  }

  backSignIn() {
    return this.http.get(this.URL + '/signin').subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.clear(),
    this.router.navigate(['/login'])
  }
}