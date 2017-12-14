import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import {MyVisibilityDirective } from './my-visibility.directive';

//import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

   public users :any;

  constructor(private dataService :DataService) {
    this.getUserData();
   }
   delete(id){
    for(var i= 0; i<this.users.length; i++){
      if(this.users[i].id === id){
        this.users.splice(i,1);
      }
  }
   }

public getUserData() {
    this.dataService.getData()
      .subscribe(data => this.users = data);
  }
  ngOnInit() {
  }
 }


