import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.css']
})
export class ViewMoviesComponent {

  movs: any
  movies: Movie[] = [];
  id: string | null;

  constructor(private _moviesService: MoviesService,
    private aRouter: ActivatedRoute) { this.id = this.aRouter.snapshot.paramMap.get('id') }

  ngOnInit(): void {
    +
    this.getMovie()
  }

  getMovie() {
    if (this.id !== null) {
      this._moviesService.getMovie(this.id).subscribe(data => {
        console.log(data);
        this.movs = data;
      }, error => {
        console.log(error);
      })
    }
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
