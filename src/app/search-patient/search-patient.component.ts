import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  constructor(private api: ApiService) { }

  searchValue: any = []
  patientId = ""

  readValue = () => {
    let data: any = { "patientId": this.patientId }

    console.log(data);

    this.api.searchPatient(data).subscribe(
      (response: any) => {
        console.log(response)
        if (response.length == 0) {
          alert("invalid patient id");
        }
        else {
          this.searchValue = response;
        }
      }
    )

  }

  deleteBtnClick = (id: any) => {

    let data: any = { "id": id }
    this.api.deletePatient(data).subscribe(
      (genrated: any)=>{
        console.log(genrated)
        if (genrated.status == "success") {
          alert("Patient deleted successfully!");
          this.patientId = ""
          this.searchValue = []
        } else {
          alert("something went wrong!");
        }
      }
    )
  }

}
