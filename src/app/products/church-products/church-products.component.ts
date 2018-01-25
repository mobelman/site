import {Component, OnInit} from '@angular/core';
import {CHURCH_PRODUCTS} from './shared/church-products';

@Component({
  selector: 'app-church-products',
  templateUrl: './church-products.component.html',
  styleUrls: ['./church-products.component.css']
})
export class ChurchProductsComponent implements OnInit {

  churchProducts = CHURCH_PRODUCTS;

  constructor() {
  }

  ngOnInit() {
  }
}
