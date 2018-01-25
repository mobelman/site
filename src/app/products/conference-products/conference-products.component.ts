import {Component, OnInit} from '@angular/core';
import {CONFERENCE_PRODUCTS} from './shared/conference-products';

@Component({
  selector: 'app-conference-products',
  templateUrl: './conference-products.component.html',
  styleUrls: ['./conference-products.component.css']
})
export class ConferenceProductsComponent implements OnInit {

  conferenceProducts = CONFERENCE_PRODUCTS;

  constructor() {
  }

  ngOnInit() {
  }
}
