import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StreamData, StreamResponse } from '../models/stream-response';

@Injectable({
  providedIn: 'root'
})
export class StreamApiService {

  constructor(private http: HttpClient) { }

  getStreams(): Observable<StreamResponse> {
    return this.http.get<any>(`${environment.apiUrl}/helix/streams`)
      .pipe(
        map((response) => ({
          data: response.data.map((stream: any) => ({
            ...stream,
            thumbnail_url: stream.thumbnail_url.replace('{width}', '320').replace('{height}', '180')
          })),
          pagination: {
            cursor: response.pagination.cursor
          }
        })));
  }
}
