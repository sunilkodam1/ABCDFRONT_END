import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanStatusService } from 'src/app/shared/loan-status.service';
import { Loan } from '../Loan';

@Component({
  selector: 'app-loan-track',
  templateUrl: './loan-track.component.html',
  styleUrls: ['./loan-track.component.css']
})
export class LoanTrackComponent implements OnInit {
  id !: number;
  loan: Loan = new Loan();
  trackStatus: any;
  applicationTrackForm !: FormGroup;
  status: any;
  showToggle: boolean = true;

  constructor(private loanService: LoanStatusService, private aroute: ActivatedRoute,
    private formBulider: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.applicationTrackForm= this.formBulider.group({
      id: ['']
    })
  }

  submit() {

    this.id = this.applicationTrackForm.value.id;

    this.loanService.getLoanById(this.id).subscribe(res => {
      console.warn("inside submit"+res);
     
        this.showToggle = !this.showToggle;
        this.status = res.status;
        let ref = document.getElementById('cancel')
        // console.warn("inside submit one"+res);
        ref?.click();
        this.applicationTrackForm.reset();

    },
    err=>{
      alert("Something went wrong");
    })

  }
}

