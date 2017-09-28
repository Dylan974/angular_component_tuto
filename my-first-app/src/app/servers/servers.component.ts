import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', TO DEFINE IT TO ATTRIBUTE (HTML -> <div app-servers>)
  // selector: '.app-servers', TO DEFINE IT TO CLASS
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
