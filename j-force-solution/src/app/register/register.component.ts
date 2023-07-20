import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {FormsModule} from '@angular/forms'
export class User{
  userName: any;
  password: any;
  email: any;
  phoneNumber: any;
  voteCount:any;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA
  // ],
  // standalone: true,
  // imports: [FormsModule, MatFormFieldModule, MatInputModule],  

})
export class RegisterComponent  {
constructor(private service:MyserviceService,private _snackBar:MatSnackBar){}

  user: User = new User();

  saveUser() {
    
    this.user.voteCount=0;

    this.service.addUser(this.user).subscribe(
      (data) => {
        console.log(data);

        this.user;

      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
      this.saveUser();
      this.openSnackBarAfterVote();
      // this.resetForm();
    }
 
openSnackBarAfterVote() {
  this._snackBar.open("Register Sucessfully", "", {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    panelClass: ['snackbar']
  });
}
}
