import {Component, Input, OnInit} from '@angular/core';
import {Church} from '../church';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CHURCHES} from '../churches';

@Component({
  selector: 'app-church-detail',
  templateUrl: './church-detail.component.html',
  styleUrls: ['./church-detail.component.css']
})
export class ChurchDetailComponent implements OnInit {

  church: Church;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.church = CHURCHES.find(church => church.id === id);
  }
}
