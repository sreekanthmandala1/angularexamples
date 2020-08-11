import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {
  serverId = 10;
  serverStatus="offline";
  notAServer="This is not a server";
  getServerStatus(){
    return this.notAServer;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
