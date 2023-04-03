import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //url = 'http://localhost:3000/movie-header/users/'
  private URL = 'https://backend-production-4ddd.up.railway.app/movie-header/users/'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.URL + 'getuser');
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.URL + id);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post(this.URL + 'newuser', user);
  }

  getUser(id: string): Observable<any> {
    return this.http.get(this.URL + id);
  }

  editUser(id: string, user: User): Observable<any> {
    return this.http.put(this.URL + id, user);
  }
}
