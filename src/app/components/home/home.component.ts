import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  constructor(
    public dataService: HomeService
  ) {
    this.getData();
  }
  
  getData(){
    console.log('home');
     this.dataService.getData()
        // .subscribe((data) =>{
        //   // console.log(data);
        // }, err => {
        //   console.log(err);
        // });
   }

  ngOnInit() {

  }
}
