import { Component, OnInit } from '@angular/core';

@Component({
  //this slector is given in app.component.html
  selector: '[app-component-selector]',
  templateUrl: './component-selector.component.html',
  styleUrls: ['./component-selector.component.css']
})
export class ComponentSelectorComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
