import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Cat } from '../cat-list/cat-list.component';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  @ViewChild('addName') addN:ElementRef
  @Output() add = new EventEmitter<Cat>()

  display = 'display: none;'
  displayBut='display: inline;'
  cat:Cat=new Cat()

  constructor() { }

  ngOnInit(): void {
  }

  dis(){
    this.displayBut='display: none;'
    this.display='display: inline;';
  }
  add1(a,b,c,d){
    
    
    this.cat.name=a.value
    this.cat.age =b.value
    this.cat.male =c.value
    this.cat.color =d.value
    
    

    this.add.emit(this.cat)
    this.cat =new Cat()  
    
    this.displayBut='display: inline;'
    this.display='display: none;'

    a.value =''
    b.value =''
    c.value =''
    d.value =''

  }
 
}
