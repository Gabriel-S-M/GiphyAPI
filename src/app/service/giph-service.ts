import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphService {
  private apiKey = 'nYKVbsf5VeRwOFPXLy35DJLfuVBuxoPA';
  private baseurl = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient){}

  getTrending(limit: number = 25, offset: number = 0, rating: string ='g') : Observable<any>{
    const params = new HttpParams().set('apiKey', this.apiKey).set('limit', limit.toString()).set('offset',offset.toString()).set('rating',rating).set('bundle','messaging_non_clips');
    return this.http.get(`${this.baseurl}/trending`, { params });
  }

  searchGifs(query: string, limit: number = 25, offset: number = 0, rating: string = 'g'): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', limit.toString())
      .set('offset', offset.toString())
      .set('rating', rating)
      .set('bundle', 'messaging_non_clips');

    return this.http.get(`${this.baseurl}/search`, { params });
  }
}
