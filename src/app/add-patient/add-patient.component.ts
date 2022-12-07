import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  patientName = ""
  patinetId = ""
  address = ""
  contactNumber = ""
  dateOfAppintment = ""
  doctorName = ""

  constructor(private api: ApiService) { }

  readValue = () => {
    let data: any =
    {
      "patientName": this.patientName,
      "patinetId": this.patinetId,
      "address": this.address,
      "contactNumber": this.contactNumber,
      "dateOfAppintment": this.dateOfAppintment,
      "doctorName": this.doctorName
    }
    console.log(data);

    this.api.addPatient(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status == "success") {

          alert("added successfully!");
          this.patientName = ""
          this.patinetId = ""
          this.address = ""
          this.contactNumber = ""
          this.dateOfAppintment = ""
          this.doctorName = ""

        } else {

          alert("Somethimg went wrong!");

        }
      }
    )
  }

}
