import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs/observable';

@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }
  //private data: Array<any>

   //userData = [];

  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
