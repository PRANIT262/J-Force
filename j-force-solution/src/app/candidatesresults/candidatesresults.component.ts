import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-candidatesresults',
  templateUrl: './candidatesresults.component.html',
  styleUrls: ['./candidatesresults.component.css']
})
export class CandidatesresultsComponent implements OnInit {
  constructor(private myservice: MyserviceService) {}

  displayedColumns: string[] = [
    'cName',
    'totalVote',
    
  ];
  ngOnInit() {
    this.getAllCandidate();
    // this.getAllAppointment();
    this.myservice.refreshNeeded.subscribe(() => {
      this.getAllCandidate();
    });
  }
  dataSource:any;
  getAllC: any;
  getAllCandidate() {
    this.myservice
      .getAllCandidate()
      .subscribe((response?) => {
        this.getAllC = response;
        // console.log('Object gained', this.getAppointmentPatient);
        this.dataSource=new MatTableDataSource(this.getAllC);
      });
  }
}
