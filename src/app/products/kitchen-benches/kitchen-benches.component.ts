import {Component, OnInit} from '@angular/core';
import {KITCHEN_BENCHES} from './shared/kitchen-benches';

@Component({
  selector: 'app-kitchen-benches',
  templateUrl: './kitchen-benches.component.html',
  styleUrls: ['./kitchen-benches.component.css']
})
export class KitchenBenchesComponent implements OnInit {

  kitchenBenches = KITCHEN_BENCHES;

  constructor() {
  }

  ngOnInit() {
  }
}
