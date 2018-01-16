import {Component, OnInit} from '@angular/core';
import {KitchenBench} from '../kitchen-bench';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {KITCHEN_BENCHES} from '../kitchen-benches';

@Component({
  selector: 'app-kitchen-bench-detail',
  templateUrl: './kitchen-bench-detail.component.html',
  styleUrls: ['./kitchen-bench-detail.component.css']
})
export class KitchenBenchDetailComponent implements OnInit {

  kitchenBench: KitchenBench;

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kitchenBench = KITCHEN_BENCHES.find(kitchenBench => kitchenBench.id === id);
  }
}
