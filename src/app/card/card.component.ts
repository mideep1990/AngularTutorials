import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { dataModel } from '../model/datamodel'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output() DataFromCard = new EventEmitter<dataModel>();
  @Input()
  dataToShow:dataModel;
  @Input()
  title:string = "Sample";
  @Input()
  Counter:number = 34;
  @Input()
  Desc:string = "Sample Desc";
  constructor() { }


  ngOnInit(): void {
  }

  sendDataToParent(){
     
    this.DataFromCard.emit(this.dataToShow)

  }

 

}
