import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', TO DEFINE IT TO ATTRIBUTE (HTML -> <div app-servers>)
  // selector: '.app-servers', TO DEFINE IT TO CLASS
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
  }

  // onUpdateServerName(event: Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}
