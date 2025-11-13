import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment'

export interface Data{
  id:number;
  Name:string;
  Age:number;
}

@Injectable({
  providedIn: 'root',
})
export class Postser {

  private apiUrl = environment.apiUrl;
  constructor(private http:HttpClient){}

  getData():Observable<Data[]>{
    return this.http.get<Data[]>(this.apiUrl)
  }

  postDta(post:Partial<Data>):Observable<Data>{
    return this.http.post<Data>(this.apiUrl, post)
  }
  
}
