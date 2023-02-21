import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  signIn() {
    console.log(this.user)
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          console.log("Resultado", res);
          if(res.user.rol == 'Admin'){
            console.log("Tienes Permisos de: ", res.user.rol )
          }
          localStorage.setItem('token', res.token)
          localStorage.setItem('correo', res.user.email)
          localStorage.setItem('rol', res.user.rol)
          this.router.navigate(['/aboutme']);
          Swal.fire(
            'Inicio de Sesión Correcto',
            'Presiona OK',
            'success'
          )
        },
        err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario ó contraseña erroneos',
          })
        }
      )
  }
}
