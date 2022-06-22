import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../widget';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.css']
})
export class WidgetDetailComponent implements OnInit {

  @Input() widget?: Widget;
  
  constructor() { }

  ngOnInit(): void {
  }

}
