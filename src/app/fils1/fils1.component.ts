import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils1',
  templateUrl: './fils1.component.html',
  styleUrls: ['./fils1.component.css']
})
export class Fils1Component implements OnInit {

  @Output() dataSave = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }
  sendData(id: number){
    console.log('sendData', id);
    this.dataSave.emit(id);
  }

}
