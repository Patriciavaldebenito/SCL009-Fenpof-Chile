import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/administrator/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { InformationComponent } from './components/information/information.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { PublicPoliticsComponent } from './components/public-politics/public-politics.component';
import { PostUserComponent } from './components/administrator/post-user/post-user.component';
import { SupportComponent } from './components/support/support.component';
import {HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/administrator/register/register.component';

import { AdminComponent } from './components/admin/admin.component';
import { ImageListComponent } from './components/administrator/images/image-list/image-list.component';
import { ImageComponent } from './components/administrator/images/image/image.component';
import { RedsocialComponent } from './redsocial/redsocial.component';


const routes: Routes = [
  // en path vacio "" por mientras se carga contenido de about // considerar home 
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  { path: "administrator/login", component: LoginComponent },//revisado
  { path: "administrator/post", component: PostUserComponent },// revisado 2e
  { path: "events", component: EventsComponent },  //revisado
  { path: "organization", component: OrganizationComponent }, //revisado
  { path: "administrator/register", component: RegisterComponent }, // con formulario centrado
  { path: "administrator/admin", component: AdminComponent },  // con formulario centrado


  { path: "admin", component: AdminComponent },//nada o bloqueado
  { path: "galery", component: ImageListComponent }, //nada o bloqueado
  { path: "information", component: InformationComponent },//nada o bloqueado
  { path: "public", component: PublicPoliticsComponent },//nada o bloqueado
  { path: "support", component: SupportComponent },//nada o bloqueado
 /* { path: "image", component: ImagenesComponent},*/
 { path: "image/upload", component: ImageComponent }, //nada o bloqueado
 { path: "image/list", component: ImageListComponent },//nada o bloqueado

 {path:"redsocial", component:RedsocialComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }