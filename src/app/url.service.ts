import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private apiUrl = 'http://localhost:8000/obter-todas-urls';

  constructor(private http: HttpClient) { }

  getUrls(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
