import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receiveData(id: number){
    console.log('receiveData', id);
    alert(id);
  }
}
