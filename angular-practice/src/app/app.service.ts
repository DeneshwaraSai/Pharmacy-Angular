import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getAPIData(id: number = 1): Observable<any> {
    return this.http.get<any>(
      'https://jsonplaceholder.typicode.com/posts/' + id,
    );
  }
}
