import { Component, OnInit } from '@angular/core';
import { BM } from 'src/app/models/bm';
import { BMService } from 'src/app/services/bm.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-bm-list',
  templateUrl: './bm-list.component.html',
  styleUrls: ['./bm-list.component.css'],
})
export class BMListComponent implements OnInit {
  title = 'ngBMTracker';
  constructor(private bmService: BMService) {}

  ngOnInit(): void {
    this.reload();
  }

  bms: BM[] = [];

  selected: null | BM = null;
  newBm: BM = new BM();
  editBm: null | BM = null;

  reload(): void {
    this.bmService.index().subscribe({
      next: (bms) => {
        console.log(bms);
        this.bms = bms;
      },
      error: (fail) => {
        console.error('BMListComponent.loadBM(): error loading bm:');
        console.error(fail);
      },
    });
  }
}
