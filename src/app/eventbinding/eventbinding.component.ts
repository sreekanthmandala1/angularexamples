import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  serverCreationStatus = "serve was not created";
  serverName="";
  onClickEvent(){
    this.serverCreationStatus="server was created"; 
  }
  onServerData(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
