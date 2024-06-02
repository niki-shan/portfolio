import { Component, OnInit } from '@angular/core';
import { education } from '../../const/data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
 educationDetails = education
  constructor() { }

  ngOnInit(): void {
  }

}
