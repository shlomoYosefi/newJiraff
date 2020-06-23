import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  cat:Cat
  



  arrayCats:Cat[] =[]
 
 
  constructor() { }

  ngOnInit(): void {
  }

  

}



export class Cat{

  name :string
  age :number
  male ?:boolean
  color ?:string
}
