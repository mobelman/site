import {Component, OnInit} from '@angular/core';
import {KitchenBench} from '../shared/kitchen-bench.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {KITCHEN_BENCHES} from '../shared/kitchen-benches';

@Component({
  selector: 'app-kitchen-bench',
  templateUrl: './kitchen-bench.component.html',
  styleUrls: ['./kitchen-bench.component.css']
})
export class KitchenBenchComponent implements OnInit {

  kitchenBench: KitchenBench;

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kitchenBench = KITCHEN_BENCHES.find(kitchenBench => kitchenBench.id === id);
  }
}
