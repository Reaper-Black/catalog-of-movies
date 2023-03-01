import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {
    email: '',
    nickname: '',
    password: '',
    rol: 'Usuario',
  }

  securyPassword = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.user)
    console.log(this.user.password[0])
    if(this.securyPassword.test(this.user.password)){
      console.log("contraseña Correcta")
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Contraseña debe contener mayúsculas y minúsculas y caracteres especiales',
      })
      return;
    }
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token)
          this.router.navigate(['/dashboard'])
          Swal.fire(
            'Cuenta Creada Correctamente',
            'Presiona OK',
            'success'
          )
        },
        err => console.log(err))
  }
}
