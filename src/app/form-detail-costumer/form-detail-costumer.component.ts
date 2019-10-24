import { CustomerService } from '../service/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form-detail-costumer',
  templateUrl: './form-detail-costumer.component.html',
  styleUrls: ['./form-detail-costumer.component.css']
})
export class FormDetailCostumerComponent implements OnInit {
costumerForm = this.builder.group({

  cif:['', Validators.required],
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  address: ['', Validators.required],
  birthDate: ['', Validators.required],
  birthPlace: ['', Validators.required],
})


  constructor(
    private route: ActivatedRoute,
    private customerService:CustomerService,
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.getByCif();
  }

  getByCif(){
    const cif = this.route.snapshot.params['cif'];
    this.customerService.getCustomerByCif(cif).subscribe(data => {
console.log(data);
      this.costumerForm.setValue(data["data"]);

    },error => console.log(error));
  }
}
