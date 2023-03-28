import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent {

  
  userForm: FormGroup
  titulo = 'Crear usuario'
  id: string | null

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userService: UsersService,
    private aRouter: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      nickname: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.editUser();
  }

  createUser() {
    const USER: User = {
      email: this.userForm.get('email')?.value,
      nickname: this.userForm.get('nickname')?.value,
      password: this.userForm.get('password')?.value,
      rol: this.userForm.get('rol')?.value
    }

    if (this.id !== null) {

      this._userService.editUser(this.id, USER).subscribe(data => {
        Swal.fire(
          'El Usuario fue Editado con Exito!',
          'Usuario Editado!',
          'success'
        )
      }, error => {
        console.log(error);
        this.userForm.reset();
      })

    } else {
      console.log(USER);
      this._userService.saveUser(USER).subscribe(data => {
        Swal.fire(
          'El Usuario fue Registrado con Exito!',
          'Usuario Registrado!',
          'success'
        )
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    }
  }

  editUser(){
    if(this.id !== null) {
      this.titulo = 'Editar Usuario';
      this._userService.getUser(this.id).subscribe(data => {
        this.userForm.setValue({
          email: data.email,
          nickname: data.nickname,
          password: data.password,
          rol: data.rol
        })
      })
    }
  }

}
