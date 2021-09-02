import { Component, Input, OnInit } from '@angular/core';
import { SHARED_CONSTANT } from 'src/app/shared/resources/shared.constant';

@Component({
  selector: 'app-city-sea-level',
  templateUrl: './city-sea-level.component.html',
  styleUrls: ['./city-sea-level.component.scss']
})
export class CitySeaLevelComponent implements OnInit {

  @Input() forecastData: any;

  // Public Properties
  public sharedConstant: any = SHARED_CONSTANT;

  constructor() { }

  ngOnInit(): void {
  }

}
