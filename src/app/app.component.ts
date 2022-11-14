import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';

  data = [
    { title:"First Content",
      counter:23,
      desc:"First content description"
    },
    { title:"Second Content",
      counter:3,
      desc:"Second content description"
    },
    { title:"Third Content",
      counter:239,
      desc:"Third content description"}
    ]

    DataFromCardFun(e)
    {
      console.log("From Card : ",e)
    }
  
}

