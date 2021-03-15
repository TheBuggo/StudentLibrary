import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() data: any = {};
  @Output() toggleSidenav = new EventEmitter();

  logo: string = "";
  title: string = "";
  constructor() { }

  ngOnInit(): void {
    this.logo = this.data.logo;
    this.title = this.data.title;
  }
}
