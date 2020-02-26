import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule} from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from '@angular/fire'; //ok
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/administrator/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { InformationComponent } from './components/information/information.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { SupportComponent } from './components/support/support.component';
import { EventsComponent } from './components/events/events.component';
import { GaleryComponent } from './components/galery/galery.component';
import { PublicPoliticsComponent } from './components/public-politics/public-politics.component';
import { PostUserComponent } from './components/administrator/post-user/post-user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/administrator/register/register.component';
//denisse
import { HttpClientModule } from '@angular/common/http';
import { ImagesComponent } from './components/administrator/images/images.component';
import { ImageListComponent } from './components/administrator/images/image-list/image-list.component';
import { ImageComponent } from './components/administrator/images/image/image.component';
import { HomeComponent } from './components/home/home.component';
import { RedsocialComponent } from './redsocial/redsocial.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
    InformationComponent,
    OrganizationComponent,
    SupportComponent,
    EventsComponent,
    GaleryComponent,
    PublicPoliticsComponent,
    PostUserComponent,
    AdminComponent,
    RegisterComponent,
    ImagesComponent,
    ImageListComponent,
    ImageComponent,
    HomeComponent,
    RedsocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()                                                                                                                                                   

  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class AppModule { }

