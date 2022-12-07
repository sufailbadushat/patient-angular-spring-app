import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  patientName = ""
  patientId = ""
  address = ""
  contactNumber = ""
  dateOfAppoinmet = ""
  doctorName = ""

  constructor(private api: ApiService) { }

  readValue = () => {
    let data: any =
    {
      "patientName": this.patientName,
      "patientId": this.patientId,
      "address": this.address,
      "contactNumber": this.contactNumber,
      "dateOfAppoinmet": this.dateOfAppoinmet,
      "doctorName": this.doctorName
    }
    console.log(data);

    this.api.addPatent(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status == "success") {

          alert("added successfully!");
          this.patientName = ""
          this.patientId = ""
          this.address = ""
          this.contactNumber = ""
          this.dateOfAppoinmet = ""
          this.doctorName = ""

        } else {

          alert("Somethimg went wrong!");

        }
      }
    )
  }

}
