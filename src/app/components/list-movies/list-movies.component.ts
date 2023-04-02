import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent {

  listMovies: Movie[] = [];

  constructor(
    private _moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this._moviesService.getMovies().subscribe(data => {
      console.log(data);
      this.listMovies = data;
    }, error => {
      console.log(error);
    })
  }

  deleteMovie(id: any) {

      Swal.fire({
        title: 'Seguro de eliminar este producto?',
        text: "No podrás revertir esto despues!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminalo!'
      }).then((result) => {
        if (result.isConfirmed) {

          this._moviesService.deleteMovie(id).subscribe(data => {
            this.getMovies();
          }, error => {
            console.log(error);
          })

          Swal.fire(
            'La pelicula fue eliminada con exito!',
            'Pelicula Eliminada',
            'success'
          )
        }
      })
  }

}
