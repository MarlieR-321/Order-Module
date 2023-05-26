import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Religion } from '../interfaces/religion';

@Injectable({
  providedIn: 'root'
})
export class ReligionService {
  private url ="http://localhost:8087/api/religion"

  httpOption = {
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }

  constructor(private http: HttpClient) { }

  public getPacById(id:String):Observable<Religion>{
    return this.http.get<Religion>(this.url+'/'+id, {headers: this.httpOption});
  }
}
