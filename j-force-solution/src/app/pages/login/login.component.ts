import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export class LoginUser{
  userName: any;
  password: any;
  email: any;
  phoneNumber: any;
  voteCount:any;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})


export class LoginComponent implements OnInit  {
  msg = '';

  constructor(private service:MyserviceService,private router :Router,private _snackBar:MatSnackBar){}

  ngOnInit(): void {

    
      this.service.login(this.user).subscribe(
        (data) => {

console.log('dfdsf'+this.user)

        });
 
      };
  user: LoginUser = new LoginUser();
  openSnackInvalid() {
    this._snackBar.open("Invalid UserName and Password", "", {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar']
    });}


  loginU() {
    
    this.service.login(this.user).subscribe(
      (data) => {
        console.log(data);
        if(data==null){
        this.openSnackInvalid();
            console.log('exception occured');
            // this.msg = 'Please enter valid email & password';
          }else{
        
        this.user;
        sessionStorage.setItem('name',this.user.userName);
        sessionStorage.setItem('password', this.user.password);
        sessionStorage.setItem('vCount', data.voteCount);

        sessionStorage.setItem('phone', data.phoneNumber); 
              //  console.log(this.user.phoneNumber);

        this.router.navigate(['/voting']);
      }},
      
    );    
  }
  onSubmit() {
      
      this.loginU();
      // this.resetForm();
    }
 
}


function getLog() {
  throw new Error('Function not implemented.');
}

