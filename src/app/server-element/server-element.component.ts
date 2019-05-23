import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {name: string, content: string, type: string};

  constructor() {
    console.log('ServerElementComponent constructor called');
  }

  ngOnInit() {
    console.log('ServerElementComponent ngOnInit called');
  }

}
