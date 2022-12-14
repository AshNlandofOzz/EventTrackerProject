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

  addPerson(person: People) {
    this.peopleService.create(this.newPerson).subscribe({
      next: (person) => {
        this.reload();
        this.newPerson = new People();
      },
      error: (fail) => {
        console.error('PeopleListComponent.addPerson(): error creating person:');
        console.error(fail);
      },
    });
    this.reload();
  }

  deletePerson(personId: number) {
    this.peopleService.destroy(personId).subscribe({
      next: (person) => {
        this.reload();
      },
      error: (fail) => {
        console.error('PeopleListComponent.deletePerson(): error loading person:');
        console.error(fail);
      },
    });
  }

  setEditPeople(person: People) {
    this.editPerson = Object.assign({}, person);
  }

  updatePerson(id: number, person: People) {

    console.log(id);
    console.log(person);
    this.peopleService.update(id, person).subscribe({
      next: (persons) => {
        this.reload();
        this.selected = person;
        this.editPerson = null;
      },
      error: (fail) => {
        console.error(
          'PeopleListHttpComponent.updatePerson(): error updating person:'
        );
        console.error(fail);
      },
    });
}
}
