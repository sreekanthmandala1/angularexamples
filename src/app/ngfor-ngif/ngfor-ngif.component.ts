import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-ngif',
  templateUrl: './ngfor-ngif.component.html',
  styleUrls: ['./ngfor-ngif.component.css']
})
export class NgforNgifComponent implements OnInit {
  numbers=[1,2,3,4,5];
  oddNumbers=[1,3,5];
  evenNumbers=[2,4];
  onlyOdd= false;
  constructor() { }

  ngOnInit(): void {
  }

}
