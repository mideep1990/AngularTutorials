import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';

  data = {
    content1:"First Content",
    content2:"Second Content",
    content3:"Third Content"
  }
  firstDivContent : string = "<script>alert('dhdf')</script>I have some apples.First Div Content. Lorem ...."
  secondDivContent : string = "Second Div Content. Lorem 2...."
  thirdDivContent : string = "Third Div Content. Lorem 3...."

  keyUpFunction(updatedValue:string)
  {
    this.data.content1 = updatedValue
  }
}

