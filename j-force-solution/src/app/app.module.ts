import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { RegisterComponent } from './pages/register/register.component';
import { CandidatesresultsComponent } from './pages/candidatesresults/candidatesresults.component';
import { VotingComponent } from './pages/voting/voting.component';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

import {MatTableModule} from '@angular/material/table';
import { RouterModule,RouterOutlet  } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CandidatesresultsComponent,
    VotingComponent,LoginComponent, AdminComponent, HomeComponent, NavbarComponent, Navbar2Component, 
  ],
  imports: [ReactiveFormsModule,MatTableModule,RouterModule,RouterOutlet,MatDividerModule,MatIconModule,
    BrowserModule,MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
