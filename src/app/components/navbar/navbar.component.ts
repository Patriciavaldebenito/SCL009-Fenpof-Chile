import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  public isLogged: boolean = false;
  public adminLetter: string = "";

  constructor( private authService: AuthService, private afsAuth: AngularFireAuth) { }

  ngOnInit() {
   this.getCurrentUser();
  }

  getCurrentUser(){

    this.authService.isAuth().subscribe(auth => {

      if(auth){
        console.log('user logged');
        this.isLogged = true;
        this.adminLetter = "Activo";

      } else {
        console.log('user NOT logged');
        this.isLogged = false;
      }

    });
  } 

  onLogout(){
    this.afsAuth.auth.signOut();
  }


}
