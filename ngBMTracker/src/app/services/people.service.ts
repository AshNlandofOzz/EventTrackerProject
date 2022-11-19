import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  baseUrl = 'http://localhost:8086/';
  url = this.baseUrl + 'api/persons';
  constructor(private http: HttpClient) { }

  index(): Observable<People[]> {
    return this.http.get<People[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('PeopleService.index(): error retrieving persons: ' + err)
        );
      })
    );
  }

  show(personId: number): Observable<People> {
    return this.http.get<People>(this.url+ '/' +personId,).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('PeopleService.index(): error retrieving person: ' + err)
        );
      })
    );
  }

create(person: People): Observable<People> {
  return this.http.post<People>(this.url, person).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError(
         () => new Error( 'person.create(): error creating Person: ' + err )
      );
    })
  );
  }
update(id: number, person: People): Observable<People> {
  return this.http.put<People>(this.url + '/' + id, person).pipe(
    catchError((err:any)=>{
      console.error(err);
      return throwError(
        ()=> new Error('person.update(): error updating Person: ' +err)
      );
    })
  );
  }

destroy(todoId: number): Observable<void> {
  return this.http.delete<void>(this.url +'/'+ todoId,).pipe();
}
}
