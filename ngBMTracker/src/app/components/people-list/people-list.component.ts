import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  title = 'ngBMTracker';
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.reload();
  }

  peoples: People[] = [];

  selected: null | People = null;
  newPerson: People = new People();
  editPerson: null | People = null;

  reload(): void {
    this.peopleService.index().subscribe({
      next: (peoples) => {
        console.log(peoples);
        this.peoples = peoples;
      },
      error: (fail) => {
        console.error('PeopleListComponent.loadPeople(): error loading people:');
        console.error(fail);
      },
    });
  }

}
