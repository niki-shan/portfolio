import { Component, OnInit } from '@angular/core';
import { detailInfo } from '../../const/data';
import { Idetail } from '../../models/datamodule';


@Component({
  selector: 'app-exprience',
  templateUrl: './exprience.component.html',
  styleUrls: ['./exprience.component.scss']
})
export class ExprienceComponent implements OnInit {
  data : Array<Idetail> = detailInfo
  
  constructor() { }
 
  ngOnInit(): void {
  console.log(this.data);
        
  }

}
