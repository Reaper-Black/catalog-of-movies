import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/movie-header/users/'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.url + 'getuser');
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post(this.url + 'newuser', user);
  }

  getUser(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editUser(id: string, user: User): Observable<any> {
    return this.http.put(this.url + id, user);
  }
}
