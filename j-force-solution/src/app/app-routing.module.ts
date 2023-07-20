import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VotingComponent } from './voting/voting.component';
import { CandidatesresultsComponent } from './candidatesresults/candidatesresults.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // redirectTo: '/index',
    // pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'voting',
    component: VotingComponent,
  },
  {
    path: 'candidateresult',
    component: CandidatesresultsComponent,
  },
  {
    path: 'adminlogin',
    component: AdminComponent,
  },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
