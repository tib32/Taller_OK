import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Fecha: ['', Validators.required],
      IDTercero: ['', Validators.required],
      IDVehiculo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  nueva() {

  }

}
