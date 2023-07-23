import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export class AdminUser{
  userName: any;
  password: any;
  email: any;
  phoneNumber: any;
  voteCount:any;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private service:MyserviceService,private _snackBar:MatSnackBar, private router :Router){}

 
  user: AdminUser = new AdminUser();
  openSnackInvalid() {
    this._snackBar.open("Invalid AdminUser and Password", "", {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar']
    });}
  loginU() {
    this.service.login(this.user).subscribe(
      (data) => {
        if(data==null){
          this.openSnackInvalid();
        }else{
        console.log(data);
        this.user;
        

              //  console.log(this.user.phoneNumber);

        this.router.navigate(['/candidateresult']);
      }},
      (error) => console.log(error)
    );    
  }
  onSubmit() {
      
      this.loginU();
      // this.resetForm();
    }
 
}
