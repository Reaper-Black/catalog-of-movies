import { Component, OnInit } from '@angular/core'
import { User } from '../../models/user'
import { UsersService } from '../../services/users.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  listUsers: User[] = [];

  constructor(
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    }, error => {
      console.log(error);
    })
  }

  deleteUser(id: any) {

      Swal.fire({
        title: 'Seguro de eliminar este usuario?',
        text: "No podrás revertir esto despues!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminalo!'
      }).then((result) => {
        if (result.isConfirmed) {

          this._userService.deleteUser(id).subscribe(data => {
            this.getUsers();
          }, error => {
            console.log(error);
          })
          
          Swal.fire(
            'El usuario fue eliminado con exito!',
            'Usuario Eliminado',
            'success'
          )
        }
      })





  }

}
