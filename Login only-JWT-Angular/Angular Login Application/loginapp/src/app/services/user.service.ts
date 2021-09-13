import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  baseUrl="http://18.222.136.233:9595"
  constructor(private http: HttpClient) { }

getUser(){
  return this.http.get(`${this.baseUrl}/getUsers`)
}

}
