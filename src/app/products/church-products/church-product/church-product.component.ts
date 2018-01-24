import {Component, OnInit} from '@angular/core';
import {ChurchProduct} from '../shared/church-product.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CHURCH_PRODUCTS} from '../shared/church-products';

@Component({
  selector: 'app-church-product',
  templateUrl: './church-product.component.html',
  styleUrls: ['./church-product.component.css']
})
export class ChurchProductComponent implements OnInit {

  churchProduct: ChurchProduct;

  constructor(private route: ActivatedRoute,
              private link: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.churchProduct = CHURCH_PRODUCTS.find(asdf => asdf.id === id);
  }
}
