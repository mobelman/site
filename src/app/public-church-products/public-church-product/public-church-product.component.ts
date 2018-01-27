import {Component, OnInit} from '@angular/core';
import {PublicChurchProduct} from '../shared/public-church-product.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PUBLIC_CHURCH_PRODUCTS} from '../shared/public-church-products';

@Component({
  selector: 'app-public-church-product',
  templateUrl: './public-church-product.component.html',
  styleUrls: ['./public-church-product.component.css']
})
export class PublicChurchProductComponent implements OnInit {

  publicChurchProduct: PublicChurchProduct;

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.publicChurchProduct = PUBLIC_CHURCH_PRODUCTS.find(item => item.id === id);
  }
}
