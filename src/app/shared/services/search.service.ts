import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) {
  }

  search(searchTerm: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/search/${searchTerm}`);
  }
}
