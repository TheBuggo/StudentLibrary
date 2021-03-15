import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) {}

  invokeApi(url: string): Observable<any> {
    return this.http.get(url);
  }
  writeToFile(url: string, data: any) {
    //apparently you cannot use http to post data so the json file will not be updated here
  }
}
