import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  constructor(private api:ApiService){}

  searchValue:any=[]
  patientId=""

  readValue=()=>{
    let data:any={"patientId":this.patientId}

    console.log(data);

    this.api.searchPatient(data).subscribe(
      (response:any)=>{
       console.log(response)
       if(response.length==0){
        alert("invalid employee code");
      }
      else{
        this.searchValue=response;
      }
      }
    )

  }
  
}
