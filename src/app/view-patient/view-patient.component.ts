import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {

  constructor(private api:ApiService){
    api.fetchPatient().subscribe(
      (response) => {
        this.patient=response
    }
    )
  }


  patient:any={}
}
