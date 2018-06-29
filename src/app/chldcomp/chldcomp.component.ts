import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-chldcomp',
  templateUrl: './chldcomp.component.html',
  styleUrls: ['./chldcomp.component.css']
})
export class ChldcompComponent implements OnInit {

  @Input() mystr:string;
  msg2="Reply from child";

  @Output() event:EventEmitter<string>=new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.mystr);
  }

  sendmsg()
  {
    this.event.emit(this.msg2);
  }
}
