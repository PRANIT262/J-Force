import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


export class votec{
  cName:any;
  userName:any;
}
@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent  implements OnInit{
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      season: ['', Validators.required] // Empty string as default value, you can set the default value if needed
    });
  }
  
  constructor(private myservice: MyserviceService,private formBuilder: FormBuilder, private _snackBar: MatSnackBar,

    private router: Router,
    ) {
      // this.favoriteSeason='';
    }
    
   pass: any=sessionStorage.getItem('password'); 
  username: any = sessionStorage.getItem('name');
  countofuser: any = sessionStorage.getItem('vCount');


logOut(){
  sessionStorage.removeItem(this.username);
  sessionStorage.removeItem(this.pass);

  console.log(sessionStorage);
  
  this.router.navigate(['/login']);

}

    onSubmit() {

      if (this.myForm.valid) {
        // console.log(this.myForm.value.season);
        this.myservice
        .votecandidate(this.username,this.myForm.value.season)
        .subscribe((data:any) => {
        const selectedSeason = this.myForm.value.season;
        if(this.countofuser==1){
          Swal.fire('Warning','You have already voted','error');       
          }
          else{
          Swal.fire('Success','Thanks for voting','success');        }
        
        
      });
    
  }
} 



// openSnackBarAlreadyVote() {
//   this._snackBar.open("Aleredy Voted", "", {
//     duration: 3000,
//     horizontalPosition: 'center',
//     verticalPosition: 'bottom',
//     panelClass: ['snackbar']
//   });
// }

// openSnackBarAfterVote() {
//   this._snackBar.open("Thank You for Vote", "", {
//     duration: 3000,
//     horizontalPosition: 'center',
//     verticalPosition: 'top',
//     panelClass: ['snackbar']
//   });
// }
}