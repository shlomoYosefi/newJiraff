import { Component, OnInit, Input } from '@angular/core';
import { Cat } from '../cat-list/cat-list.component';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.css']
})
export class CatItemComponent implements OnInit {

  

  @Input() cat:Cat

  constructor() { }

  ngOnInit(): void {
  }

}
