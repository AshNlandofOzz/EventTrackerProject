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

  addBM(bm: BM) {
    this.bmService.create(this.newBm).subscribe({
      next: (bm) => {
        this.reload();
        this.newBm = new BM();
      },
      error: (fail) => {
        console.error('BMListComponent.addBm(): error creating bm record:');
        console.error(fail);
      },
    });
    this.reload();
  }

  deleteBm(bmId: number) {
    this.bmService.destroy(bmId).subscribe({
      next: (person) => {
        this.reload();
      },
      error: (fail) => {
        console.error('BMListComponent.deleteBm(): error loading bm record:');
        console.error(fail);
      },
    });
  }

  setEditBm(bm: BM) {
    this.editBm = Object.assign({}, bm);
  }

  updateBm(id: number, bm: BM) {
    this.bmService.update(id, bm).subscribe({
      next: (data) => {
        this.reload();
        this.selected = bm;
        this.editBm = null;
      },
      error: (fail) => {
        console.error(
          'BMListHttpComponent.updateBm(): error updating bm record:'
        );
        console.error(fail);
      },
    });
}
}
