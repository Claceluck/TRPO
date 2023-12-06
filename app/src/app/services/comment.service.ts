import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {}

  create(comment: any): Observable<any> {
    return this.http.post(``, comment);
  }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(``);
  }
}
