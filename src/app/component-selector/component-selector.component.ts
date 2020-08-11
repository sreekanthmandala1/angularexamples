import { Component, OnInit } from '@angular/core';

@Component({
  //this selctor is given in app.component.html
  //can also select by using class .app-component-selector inside app.component.html as <div class="app-component-selector></div>"
  selector: '[app-component-selector]',
  templateUrl: './component-selector.component.html',
  styleUrls: ['./component-selector.component.css']
})
export class ComponentSelectorComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
