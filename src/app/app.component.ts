import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  pstr="Message from parent component";
  msg2:string;
  set(data)
  {
    this.msg2=data;
  }
}
