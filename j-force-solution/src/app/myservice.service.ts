import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { User } from './register/register.component';
import { LoginUser } from './login/login.component';
import { votec } from './voting/voting.component';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpClient: HttpClient) { } 
  private refresh = new Subject<void>();
  get refreshNeeded() {
    return this.refresh;
  }
  public addUser(user: User): Observable<Object> {
    return this.httpClient.post(
      `http://localhost:2222/registeruser/add`,
      user
    );
    }

  login(login: LoginUser): Observable<any> {
    return this.httpClient.get<any>(
      "http://localhost:2222/login/"+login.userName+"/"+login.password
    );
    }
    public votecandidate(
      userName: any,
      cName: any
    ){
      return this.httpClient.put(
        `http://localhost:2222/user/vote/${userName}/${cName}`,userName,cName
        );
    }

    getAllCandidate(): Observable<any> {
      return this.httpClient.get<any>(
        "http://localhost:2222/candidate/viewallcandidate"

      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
      }
    
  }
