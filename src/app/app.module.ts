import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
//import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination'
//import { LoginComponent } from './user/login/login.component';
import { SearchPipe } from './grid/search.pipe';

import { GridComponent } from './grid/grid.component';
import { DataService } from './services/data.service';
import { HttpClientModule , HttpClient  } from '@angular/common/http';
import { SortPipe } from './grid/sort.pipe';

//import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MyVisibilityDirective } from './grid/my-visibility.directive';



@NgModule({
  declarations: [
    AppComponent,
 
   GridComponent,
   SearchPipe,
   SortPipe,
   MyVisibilityDirective,
  
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
   //BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [DataService],
   bootstrap: [AppComponent]
})
export class AppModule { }
