import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reference } from './reference';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  public references: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getReferences(): void {
    this.http.get<any>('https://cit.zcorp.be/check/all').subscribe(result => {
      const res = Object.values(result) as Reference[];
      this.references.next(res.filter(item => !item.year || !item.first_author));
    });
  }
}
