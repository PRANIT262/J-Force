import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
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
  

})
export class RegisterComponent  {
constructor(private service:MyserviceService,private _snackBar:MatSnackBar){}

  user: User = new User();

  saveUser() {
    
    this.user.voteCount=0;

    this.service.addUser(this.user).subscribe(
      (data:any) => {
        console.log(data);

        this.user;

      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
      this.saveUser();
      Swal.fire('Success','You have successfully registered','success')
      // this.resetForm();
    }
 
// openSnackBarAfterVote() {
//   this._snackBar.open("Register Sucessfully", "", {
//     duration: 3000,
//     horizontalPosition: 'center',
//     verticalPosition: 'bottom',
//     panelClass: ['snackbar']
//   });
// }
}
