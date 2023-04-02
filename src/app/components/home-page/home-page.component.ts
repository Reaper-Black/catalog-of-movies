import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  listMovies: Movie[] = [];

  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {+
    this.getMovies()
  }

  getMovies() {
    this._moviesService.getMovies().subscribe(data => {
      console.log(data);
      this.listMovies = data;
    }, error => {
      console.log(error);
    })
  }

}
