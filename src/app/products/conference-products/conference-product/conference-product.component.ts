import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ConferenceProduct} from '../shared/conference-product.model';
import {CONFERENCE_PRODUCTS} from '../shared/conference-products';

@Component({
  selector: 'app-conference-product',
  templateUrl: './conference-product.component.html',
  styleUrls: ['./conference-product.component.css']
})
export class ConferenceProductComponent implements OnInit {

  conferenceProduct: ConferenceProduct;

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.conferenceProduct = CONFERENCE_PRODUCTS.find(conferenceProduct => conferenceProduct.id === id);
  }
}
