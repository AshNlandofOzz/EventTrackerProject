import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { BM } from '../models/bm';

@Injectable({
  providedIn: 'root'
})
export class BMService {
  baseUrl = 'http://localhost:8086/';
  url = this.baseUrl + 'api/bms';
  constructor(private http: HttpClient) { }

  index(): Observable<BM[]> {
    return this.http.get<BM[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BMService.index(): error retrieving bms: ' + err)
        );
      })
    );
  }

  show(bmId: number): Observable<BM> {
    return this.http.get<BM>(this.url+ '/' + bmId,).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BMService.index(): error retrieving bm: ' + err)
        );
      })
    );
  }

create(bm: BM): Observable<BM> {
  return this.http.post<BM>(this.url, bm).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError(
         () => new Error( 'person.create(): error creating Person: ' + err )
      );
    })
  );
  }
update(id: number, bm: BM): Observable<BM> {
  return this.http.put<BM>(this.url + '/' + id, bm).pipe(
    catchError((err:any)=>{
      console.error(err);
      return throwError(
        ()=> new Error('bm.update(): error updating bm: ' +err)
      );
    })
  );
  }

destroy(bmId: number): Observable<void> {
  return this.http.delete<void>(this.url +'/'+ bmId,).pipe();
}
}
