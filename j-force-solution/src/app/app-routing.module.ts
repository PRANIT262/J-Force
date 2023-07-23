import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VotingComponent } from './pages/voting/voting.component';
import { CandidatesresultsComponent } from './pages/candidatesresults/candidatesresults.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },

  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
  },
  {
    path: 'voting',
    component: VotingComponent,
    pathMatch: 'full',
  },
  {
    path: 'candidateresult',
    component: CandidatesresultsComponent,
    pathMatch: 'full',
  },
  {
    path: 'adminlogin',
    component: AdminComponent,
    pathMatch: 'full',
  },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
