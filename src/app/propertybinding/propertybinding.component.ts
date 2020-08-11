import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  allowNewServer = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    },6000);
  }

  ngOnInit(): void {
  }

}
