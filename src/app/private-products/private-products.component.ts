import {Component, OnInit} from '@angular/core';
import {KITCHEN_BENCHES} from '../kitchen-benches';

@Component({
  selector: 'app-private-products',
  templateUrl: './private-products.component.html',
  styleUrls: ['./private-products.component.css']
})
export class PrivateProductsComponent implements OnInit {

  kitchenBenches = KITCHEN_BENCHES;

  constructor() {
  }

  ngOnInit() {
  }
}
