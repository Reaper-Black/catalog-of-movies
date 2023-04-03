import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private _moviesService: MoviesService, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this._moviesService.getMovies().subscribe(data => {
      console.log(data);
      this.movies = data;
    }, error => {
      console.log(error);
    })
  }
}
