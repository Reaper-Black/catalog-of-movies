import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public currentUser = localStorage['rol']; 

  getCurrentUser() {
    this.currentUser = localStorage['rol'];
  }
  constructor(public authService: AuthService, public router: Router) {
    
    this.getCurrentUser() 
    console.log('constructor', this.currentUser)

  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login']).then( res => 

     location.reload()  
     
     );
   
  }
  

  ngOnInit(): void {
    
    this.currentUser = localStorage['rol']; 
    console.log('ngOninit: ', this.currentUser)
  }



}
