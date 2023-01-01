import {AfterViewInit, Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  universityList: any = [];
  searchText: any = "";
  p: number = 1;
  data: any; 
  itemsPerPage = 10;
  totalItems : any; 
  
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    console.log("Before Receiving");
    //do some loading
    this.apiService.getUniversity().subscribe((data)=>{
      console.log("Receiving Data");
      console.log(data);
      this.universityList = data;
    });
  }
}