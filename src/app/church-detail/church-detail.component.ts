import {Component, OnInit} from '@angular/core';
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

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    /* URL router links generated with parts set to lower case; make sure to match against lower case variant. */
    const location = this.route.snapshot.paramMap.get('location');
    const name = this.route.snapshot.paramMap.get('name');
    this.church = CHURCHES.find(church => church.location.toLowerCase() === location && church.name.toLowerCase() === name);
  }
}
