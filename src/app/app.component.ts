import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<p>{{someProperty}}</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  someProperty:string="";
  pstr="Message from parent component";
  msg2:string;

  constructor(private dataService:DataServiceService) {}

  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty=this.dataService.myData();
  }

  set(data)
  {
    this.msg2=data;
  }
}
