import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-new-movies',
  templateUrl: './new-movies.component.html',
  styleUrls: ['./new-movies.component.css']
})
export class NewMoviesComponent {

  movieForm: FormGroup;
  titulo = 'Crear Pelicula';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _moviesService: MoviesService,
    private aRouter: ActivatedRoute) {
    this.movieForm = this.fb.group({
      movie: ['', Validators.required],
      categoria: ['', Validators.required],
      duracion: ['', Validators.required],
      director: ['', Validators.required],
      fecha_lanzamiento: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editMovie();
  }

  createMovie() {
    const MOVIE: Movie = {
      nombre: this.movieForm.get('movie')?.value,
      categoria: this.movieForm.get('categoria')?.value,
      duracion: this.movieForm.get('duracion')?.value,
      director: this.movieForm.get('director')?.value,
      fecha_lanzamiento: this.movieForm.get('fecha_lanzamiento')?.value,
      descripcion: this.movieForm.get('descripcion')?.value
    }

    if (this.id !== null) {
      this._moviesService.editMovie(this.id, MOVIE).subscribe(data => {
        Swal.fire(
          'La pelicula fue editada correctamente!',
          'Pelicula Editada!',
          'success'
        )
      }, error => {
        console.log(error);
        this.movieForm.reset();
      })

    } else {
      console.log(MOVIE);
      this._moviesService.saveMovie(MOVIE).subscribe(data => {
        Swal.fire(
          'La Pelicula fue registrada con exito!',
          'Pelicula Registrada!',
          'success'
        )
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.movieForm.reset();
      })
    }
  }

  editMovie() {
    if (this.id !== null) {
      this.titulo = 'Editar Pelicula';
      this._moviesService.getMovie(this.id).subscribe(data => {
        this.movieForm.setValue({
          movie: data.nombre,
          categoria: data.categoria,
          duracion: data.duracion,
          director: data.director,
          fecha_lanzamiento: data.fecha_lanzamiento,
          descripcion: data.descripcion
        })
      })
    }
  }

}
