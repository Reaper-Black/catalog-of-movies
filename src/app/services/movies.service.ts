import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  URL = 'http://localhost:3000/movie-header/movies/'

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(this.URL + 'getmovies');
  }

  deleteMovie(id: string): Observable<any> {
    return this.http.delete(this.URL + id);
  }

  saveMovie(movie: Movie): Observable<any> {
    return this.http.post(this.URL + 'createmovie', movie);
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(this.URL + id);
  }

  editMovie(id: string, movie: Movie): Observable<any> {
    return this.http.put(this.URL + id, movie);
  }
}